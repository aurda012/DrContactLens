import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Notifications = new Mongo.Collection('Notifications');

Notifications.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Notifications.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Notifications.schema = new SimpleSchema({
  recipient: {
    type: String,
    label: 'The ID of the user receiving this notification.',
  },
  message: {
    type: String,
    label: 'The message for the notification.',
  },
  type: {
    type: String,
    label: 'Type of notification.',
  },
  triggeredBy: {
    type: String,
    label: 'The ID of the user that triggered this notification.',
  },
  redirectTo: {
    type: String,
    label: 'The path to redirect to when notification is read.',
  },
  read: {
    type: Boolean,
    defaultValue: false,
    label: 'Has this notification been read by the recipient?',
  },
});

Notifications.attachSchema(Notifications.schema);

export default Notifications;
