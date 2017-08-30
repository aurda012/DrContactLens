/* eslint-disable no-undef */

import { Meteor } from 'meteor/meteor';
import Patients from '../../api/patients/patients';
import sendEmailNotification from './send-email-notifications';

const getPatient = (email) => {
  try {
    return Patients.findOne({ emailAddress: email.patEmail });
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
};

export default function (email) {
  try {
    const patient = getPatient(email);
    const id = patient._id;
    return sendEmailNotification('orderVerification', { to: email.patEmail, id });
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
}
