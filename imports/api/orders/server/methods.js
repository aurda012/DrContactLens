import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import handlePendingOrder from '../../../modules/server/stripe/handle-pending';

Meteor.methods({
  'orders.approve': function(order) {
    check(order, Object);
    return handlePendingOrder(order)
    .then((response) => response)
    .catch((error) => {
      throw new Meteor.Error('500', error);
    });
  },
});
