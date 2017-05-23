import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Patients from './patients';
import rateLimit from '../../modules/rate-limit.js';

export const upsertPatient = new ValidatedMethod({
  name: 'patients.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    firstName: { type: String, optional: true },
    lastName: { type: String, optional: true },
    emailAddress: { type: String, optional: true },
    patientStatus: { type: String, optional: true },
    contactBrand: { type: String, optional: true },
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
    lastExam: { type: String, optional: true },
    prescriptionExpiration: { type: String, optional: true },
  }).validator(),
  run(patient) {
    return Patients.upsert({ _id: patient._id }, { $set: patient });
  },
});

export const removePatient = new ValidatedMethod({
  name: 'patients.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Patients.remove(_id);
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
