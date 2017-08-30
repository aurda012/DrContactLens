/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import Patients from '../api/patients/patients.js';

const isAuthorized = ({ userId, documentId }) => {
  const existingDocument = Patients.findOne(documentId, { fields: { owner: 1 } });
  const owner = existingDocument ? existingDocument.owner : userId;

  if (userId && (userId === owner)) return owner;
  throw new Meteor.Error('500', 'Sorry, you\'re not allowed to do that!');
};

export default isAuthorized;
