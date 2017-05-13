/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import Doctors from '../../../api/doctors/doctors';
import { cancelSubscription } from './index';

let action;

const getDoctor = (userId) => {
  try {
    return Doctors.findOne({ userId });
  } catch (exception) {
    action.reject(`[handleCancelSubscription.getDoctor] ${exception}`);
  }
};

const handleCancelSubscription = (userId, promise) => {
  try {
    action = promise;
    const doctor = getDoctor(userId);
    cancelSubscription(doctor.subscription.id)
      .then(Meteor.bindEnvironment(({ current_period_end }) => {
        Doctors.update(doctor._id, {
          $set: {
            // Custom flag as Stripe returns 'active' for subscriptions that cancel at period end.
            // We'll receive a webhook from Stripe at period end with the 'canceled' status.
            // See: /imports/modules/server/stripe/webhooks/doctor.subscription.deleted.js.
            'subscription.status': 'cancelling',
            'subscription.current_period_end': current_period_end,
          },
        });
      }))
      .catch(error => action.reject(error));
  } catch (exception) {
    action.reject(`[handleCancelSubscription] ${exception}`);
  }
};

export default userId =>
  new Promise((resolve, reject) =>
    handleCancelSubscription(userId, { resolve, reject }));
