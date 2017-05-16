import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Patients from '../patients';

Meteor.publish('patients.list', function patientsListPublication() {
  return Patients.find({ owner: this.userId });
});

Meteor.publish('patients.view', function patientsViewPublication(_id) {
  check(_id, String);
  const patients = Patients.find({ _id });
  const patient = patients.fetch()[0];
  const owner = patient ? patient.owner : null;

  if (owner === this.userId) {
    return Patients.find({ _id });
  }
  return this.ready();
});
