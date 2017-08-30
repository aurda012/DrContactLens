import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Catalog from '../catalog';

Meteor.publish('catalog', () => Catalog.find());

Meteor.publish('catalog.view', (_id) => {
  check(_id, String);
  return Catalog.find(_id);
});
