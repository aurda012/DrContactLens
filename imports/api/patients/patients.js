import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

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

Patients.schema = new SimpleSchema({
  owner: {
    type: String,
    label: 'The ID of the owner of this Patient.',
  },
  firstName: {
    type: String,
    label: 'First Name',
  },
  lastName: {
    type: String,
    label: 'Last Name',
  },
  emailAddress: {
    type: String,
    label: 'Email Address',
  },
  phoneNumber: {
    type: String,
    regEx: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
    label: 'Phone Number',
  },
  dateOfBirth: {
    optional: true,
    type: String,
    label: 'Date of Birth',
  },
  insuranceCompany: {
    type: String,
    label: 'Insurance Company',
  },
  insuranceId: {
    type: String,
    label: 'Insurance ID',
  },
  streetAddress: {
    type: String,
    label: 'Street',
    max: 100,
  },
  cityAddress: {
    type: String,
    label: 'City',
    max: 50,
  },
  stateAddress: {
    type: String,
    label: 'State',
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
  },
  zipAddress: {
    type: String,
    label: 'Zip Code',
    regEx: /^[0-9]{5}$/,
  },
  lastExam: {
    type: String,
    label: 'Date of Last Exam',
    optional: true,
  },
  prescriptionExpiration: {
    type: String,
    label: 'Prescription Expiration',
    optional: true,
  },
  contactBrandRight: {
    type: String,
    label: 'Right Eye Lens Brand',
  },
  contactBrandLeft: {
    type: String,
    label: 'Left Eye Lens Brand',
  },
  powerRight: {
    type: String,
    label: 'Right Eye Power',
  },
  powerLeft: {
    type: String,
    label: 'Left Eye Power',
  },
  cylinderRight: {
    type: String,
    label: 'Left Eye Power',
  },
  cylinderLeft: {
    type: String,
    label: 'Left Eye Power',
  },
  axisRight: {
    type: String,
    label: 'Left Eye Power',
  },
  axisLeft: {
    type: String,
    label: 'Left Eye Power',
  },
  addPowerRight: {
    type: String,
    label: 'Left Eye Power',
  },
  addPowerLeft: {
    type: String,
    label: 'Left Eye Power',
  },
  baseCurveRight: {
    type: String,
    label: 'Left Eye Power',
  },
  baseCurveLeft: {
    type: String,
    label: 'Left Eye Power',
  },
  diameterRight: {
    type: String,
    label: 'Left Eye Power',
  },
  diameterLeft: {
    type: String,
    label: 'Left Eye Power',
  },
  colorRight: {
    type: String,
    label: 'Left Eye Power',
  },
  colorLeft: {
    type: String,
    label: 'Left Eye Power',
  },
});

Patients.attachSchema(Patients.schema);

export default Patients;
