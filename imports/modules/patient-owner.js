/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import Patients from '../api/patients/patients.js';

const isOwner = ({ userId, patientId }) => {
  const existingPatient = Patients.findOne(patientId, { fields: { owner: 1 } });
  const owner = existingPatient ? existingPatient.owner : userId;

  if (userId === owner) return owner;
  throw new Meteor.Error('500', 'Sorry, you\'re not allowed to do that!');
};

export default isOwner;
