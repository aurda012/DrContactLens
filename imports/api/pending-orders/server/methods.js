import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import handleCheckout from '../../../modules/server/stripe/handle-checkout';

Meteor.methods({
  checkout(order) {
    check(order, Object);
    console.log(order);
    return handleCheckout(order)
      .catch((error) => {
        throw new Meteor.Error('500', `${error}`);
      });
  },
});

