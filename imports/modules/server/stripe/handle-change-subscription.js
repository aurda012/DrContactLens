/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import Doctors from '../../../api/doctors/doctors';
import { changeSubscription, createSubscription } from './index';

let action;

const updateDoctor = (doctorId, { id, status, plan, current_period_end }) => {
  try {
    Doctors.update(doctorId, {
      $set: {
        'subscription.id': id,
        'subscription.status': status,
        'subscription.plan': plan.id,
        'subscription.current_period_end': current_period_end,
      },
    });
  } catch (exception) {
    module.reject(`[handleChangeSubscription.updateDoctor] ${exception}`);
  }
};

const getDoctor = (userId) => {
  try {
    return Doctors.findOne({ userId });
  } catch (exception) {
    action.reject(`[handleChangeSubscription.getDoctor] ${exception}`);
  }
};

const handleChangeSubscription = ({ userId, newPlan }, promise) => {
  try {
    action = promise;
    const doctor = getDoctor(userId);
    const status = doctor.subscription.status;
    const hasSubscription = status === 'active' || status === 'trialing' || status === 'cancelling';

    if (hasSubscription) {
      changeSubscription(doctor.subscription.id, { plan: newPlan })
        .then(Meteor.bindEnvironment((change) => {
          updateDoctor(doctor._id, change);
          action.resolve();
        }))
        .catch(error => action.reject(error));
    } else {
      createSubscription({ doctor: doctor.doctorId, plan: newPlan })
        .then(Meteor.bindEnvironment((change) => {
          updateDoctor(doctor._id, { ...change });
          action.resolve();
        }))
        .catch(error => action.reject(error));
    }
  } catch (exception) {
    action.reject(`[handleChangeSubscription] ${exception}`);
  }
};

export default userId =>
  new Promise((resolve, reject) =>
    handleChangeSubscription(userId, { resolve, reject }));
