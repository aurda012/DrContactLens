import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Patients from './patients';
import rateLimit from '../../modules/rate-limit.js';
import isAuthorized from '../../modules/is-authorized.js';

export const upsertPatient = new ValidatedMethod({
  name: 'patients.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    firstName: { type: String, optional: true },
    lastName: { type: String, optional: true },
    emailAddress: { type: String, optional: true },
    phoneNumber: { type: String, optional: true },
    dateOfBirth: { type: String, optional: true },
    insuranceCompany: { type: String, optional: true },
    insuranceId: { type: String, optional: true },
    streetAddress: { type: String, optional: true },
    cityAddress: { type: String, optional: true },
    stateAddress: { type: String, optional: true },
    zipAddress: { type: String, optional: true },
    lastExam: { type: String, optional: true },
    prescriptionExpiration: { type: String, optional: true },
    contactBrandRight: { type: String, optional: true },
    contactBrandLeft: { type: String, optional: true },
    powerRight: { type: String, optional: true },
    powerLeft: { type: String, optional: true },
    cylinderRight: { type: String, optional: true },
    cylinderLeft: { type: String, optional: true },
    axisRight: { type: String, optional: true },
    axisLeft: { type: String, optional: true },
    addPowerRight: { type: String, optional: true },
    addPowerLeft: { type: String, optional: true },
    baseCurveRight: { type: String, optional: true },
    baseCurveLeft: { type: String, optional: true },
    diameterRight: { type: String, optional: true },
    diameterLeft: { type: String, optional: true },
    colorRight: { type: String, optional: true },
    colorLeft: { type: String, optional: true },
  }).validator(),
  run(patient) {
    const patientToInsert = patient;
    const owner = isAuthorized({ userId: this.userId, patientId: patient._id });
    patientToInsert.owner = owner;
    return Patients.upsert({ _id: patient._id }, { $set: patientToInsert });
  },
});

export const removePatient = new ValidatedMethod({
  name: 'patients.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run(patient) {
    if (isAuthorized({ userId: this.userId, patientId: patient._id })) {
      Patients.remove(patient._id);
    }
  },
});

rateLimit({
  methods: [
    upsertPatient,
    removePatient,
  ],
  limit: 5,
  timeRange: 1000,
});
