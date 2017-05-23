import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Contacts = new Mongo.Collection('Contacts');

Contacts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Contacts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const ContactsSchema = new SimpleSchema({
  manufacturer: {
    type: String,
    label: 'Manufacturer of the contacts.',
  },
  brandName: {
    type: String,
    label: 'Brand Name of the contacts.',
  },
  wholesalePrice: {
    type: String,
    label: 'Wholesale price of the contacts.',
  },
  retailPrice: {
    type: String,
    label: 'Retail price of the contacts.',
  },
});

Contacts.attachSchema(ContactsSchema);

export default Contacts;
