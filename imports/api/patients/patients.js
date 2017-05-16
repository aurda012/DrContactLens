import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Patients = new Mongo.Collection('Patients');
export default Patients;

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

Patients.schema = new SimpleSchema({
  firstName: {
    type: String,
    label: 'The first name of the patient.',
  },
  lastName: {
    type: String,
    label: 'The last name of the patient.',
  },
  emailAddress: {
    type: String,
    label: 'The email of this patient.',
  },
  lastExam: {
    type: Date,
    label: 'The last exam date of the prescription.',
  },
  contactBrand: {
    type: String,
    label: 'The contact brand of the prescription of this patient.',
  },
  powerRight: {
    type: String,
    label: 'Right Eye - Power',
  },
  powerLeft: {
    type: String,
    label: 'Left Eye - Power',
  },
  cylinderRight: {
    type: String,
    label: 'Right Eye - Cylinder',
  },
  cylinderLeft: {
    type: String,
    label: 'Left Eye - Cylinder',
  },
  axisRight: {
    type: String,
    label: 'Right Eye - Axis',
  },
  axisLeft: {
    type: String,
    label: 'Left Eye - Axis',
  },
  addPowerRight: {
    type: String,
    label: 'Right Eye - Add Power',
  },
  addPowerLeft: {
    type: String,
    label: 'Left Eye - Add Power',
  },
  baseCurveRight: {
    type: String,
    label: 'Right Eye - Base Curve',
  },
  baseCurveLeft: {
    type: String,
    label: 'Left Eye - Base Curve',
  },
  diameterRight: {
    type: String,
    label: 'Right Eye - Diameter',
  },
  diameterLeft: {
    type: String,
    label: 'Left Eye - Diameter',
  },
  prescriptionExpiration: {
    type: Date,
    label: 'The expiration date of the prescription.',
  },
  patientStatus: {
    type: Boolean,
    label: 'The status of the patient.',
  },
});

Patients.attachSchema(Patients.schema);
