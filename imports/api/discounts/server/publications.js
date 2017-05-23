import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Discounts from '../discounts';

Meteor.publish('discounts.list', () => Discounts.find());

Meteor.publish('discounts.view', (_id) => {
  check(_id, String);
  return Discounts.find(_id);
});
