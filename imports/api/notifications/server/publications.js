import { Meteor } from 'meteor/meteor';
import Notifications from '../notifications';

Meteor.publish('notifications', function notifications() {
  return Notifications.find({ recipient: this.userId, read: false });
});
