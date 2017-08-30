import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';
import sendEmail from '../../modules/server/send-email-notifications.js';

const sendEmailNotification = new ValidatedMethod({
  name: 'emails.sendNotification',
  validate: new SimpleSchema({
    type: { type: String },
    payload: { type: Object, blackbox: true },
  }).validator(),
  run({ type, payload }) {
    sendEmail(type, payload);
  },
});

rateLimit({
  methods: [
    sendEmailNotification,
  ],
  limit: 5,
  timeRange: 1000,
});

Meteor.methods({
  sendMessage(message) {
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: `${message.name} ${message.email}`,
        from: 'Dr Contact Lens <support@drcontactlens.com>',
        subject: `${message.name} sent a message!`,
        text: message.message,
      });
    });
  },
});
