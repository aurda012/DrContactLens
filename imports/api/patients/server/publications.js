import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Patients from '../patients';

Meteor.publish('patients.list', () => Patients.find());

Meteor.publish('patients.view', (_id) => {
  check(_id, String);
  return Patients.find(_id);
});
