/* eslint-disable spaced-comment */

import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Patients from './patients';
// import rateLimit from '../../modules/rate-limit.js';
import isOwner from '../../modules/patient-owner';

export const upsertPatient = new ValidatedMethod({
  name: 'patients.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(patient) {
    const patientToInsert = patient;
    const owner = isOwner({ userId: this.userId, patientId: patient._id });
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
    if (isOwner({ userId: this.userId, patientId: patient._id })) {
      Patients.remove(patient._id);
    }
  },
});

/*
rateLimit({
  methods: [
    upsertPatient,
    removePatient,
  ],
  limit: 5,
  timeRange: 1000,
}); */
