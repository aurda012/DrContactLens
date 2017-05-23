import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Contacts from './contacts';
import rateLimit from '../../modules/rate-limit.js';

export const upsertContact = new ValidatedMethod({
  name: 'contacts.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    manufacturer: { type: String, optional: true },
    brandName: { type: String, optional: true },
    wholesalePrice: { type: String, optional: true },
    retailPrice: { type: String, optional: true },
  }).validator(),
  run(contact) {
    return Contacts.upsert({ _id: contact._id }, { $set: contact });
  },
});

export const removeContact = new ValidatedMethod({
  name: 'contacts.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Contacts.remove(_id);
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
