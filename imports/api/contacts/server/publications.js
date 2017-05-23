import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Contacts from '../contacts';

Meteor.publish('contacts', () => Contacts.find());

Meteor.publish('contacts.view', (_id) => {
  check(_id, String);
  return Contacts.find(_id);
});
