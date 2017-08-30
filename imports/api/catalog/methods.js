import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Catalog from './catalog';
import rateLimit from '../../modules/rate-limit.js';

export const upsertContact = new ValidatedMethod({
  name: 'contact.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    SER_ID: { type: String, optional: true },
    MAN_NAME: { type: String, optional: true },
    SER_NAME: { type: String, optional: true },
    SER_DURATION: { type: String, optional: true },
    SER_RETAIL: { type: String, optional: true },
    SER_WHOLESALE: { type: String, optional: true },
    PRF_BASECURVE: { type: String, optional: true },
    PRF_DIAMETER: { type: String, optional: true },
    PRD_POWER: { type: String, optional: true },
    PRD_COLOR: { type: String, optional: true },
    PRD_CYLINDER: { type: String, optional: true },
    PRD_AXIS: { type: String, optional: true },
    PRD_ADDITION: { type: String, optional: true },
  }).validator(),
  run(catalog) {
    return Catalog.upsert({ _id: catalog._id }, { $set: catalog });
  },
});

export const removeContact = new ValidatedMethod({
  name: 'contact.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Catalog.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertContact,
    removeContact,
  ],
  limit: 5,
  timeRange: 1000,
});
