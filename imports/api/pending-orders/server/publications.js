import { Meteor } from 'meteor/meteor';
import PendingOrders from '../pending-orders';

Meteor.publish('pending-orders', () => PendingOrders.find());

