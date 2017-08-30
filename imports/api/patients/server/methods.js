import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import handleSendEmail from '../../../modules/server/handle-patient-email';

Meteor.methods({
  handleEmail(email) {
    check(email, Object);
    return handleSendEmail(email);
  },
});
