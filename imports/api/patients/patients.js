import { Mongo } from 'meteor/mongo';

const Patients = new Mongo.Collection('Patients');

Patients.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Patients.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default Patients;
