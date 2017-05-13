/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import Doctors from '../../../api/doctors/doctors';
import { updateDoctor } from './index';

let action;

const getDoctor = (userId) => {
  try {
    return Doctors.findOne({ userId });
  } catch (exception) {
    action.reject(`[handleUpdatePayment.getDoctor] ${exception}`);
  }
};

const handleUpdatePayment = ({ userId, source }, promise) => {
  try {
    action = promise;
    const doctor = getDoctor(userId);
    if (doctor) {
      updateDoctor(doctor.doctorId, { source })
        .then(Meteor.bindEnvironment(({ sources }) => {
          const card = sources.data[0];
          Doctors.update(doctor._id, {
            $set: {
              card: {
                brand: card.brand,
                last4: card.last4,
              },
            },
          });
          action.resolve();
        }))
        .catch((exception) => {
          action.reject(`[handleUpdatePayment] ${exception}`);
        });
    }
  } catch (exception) {
    action.reject(`[handleUpdatePayment] ${exception}`);
  }
};

export default userId =>
  new Promise((resolve, reject) =>
    handleUpdatePayment(userId, { resolve, reject }));
