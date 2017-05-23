import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Solutions from '../solutions';

Meteor.publish('solutions', () => Solutions.find());

Meteor.publish('solutions.view', (_id) => {
  check(_id, String);
  return Solutions.find(_id);
});
