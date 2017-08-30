/* eslint-disable consistent-return,max-len */

import { Meteor } from 'meteor/meteor';
import { createCharge } from './index';
import Orders from '../../../api/orders/orders';
import createNotification from '../create-notification';
import sendEmailNotification from '../send-email-notifications';

let action;

const insertOrder = Meteor.bindEnvironment((order) => {
  try {
    Orders.insert(order);
  } catch (exception) {
    action.reject(`[createOrder.insertOrder] ${exception}`);
  }
});

const createOrder = ({ customer, patient, doctor, dateCreated, stripeAmount, quantRight, quantLeft }, promise) => {
  try {
    action = promise;

    createCharge({ amount: stripeAmount, currency: 'usd', customer, destination: { account: doctor.accountId } })
    .then(() => {
      insertOrder({
        ownerId: patient._id,
        doctorId: patient.owner,
        customerId: customer,
        accountId: doctor.accountId,
        createdAt: dateCreated,
        patientFirst: patient.firstName,
        patientLast: patient.lastName,
        quantityRight: quantRight,
        quantityLeft: quantLeft,
        brandRight: patient.contactBrandRight,
        brandLeft: patient.contactBrandLeft,
        orderTotal: stripeAmount,
      });
      sendEmailNotification('orderPlaced', { to: doctor.email });
      // createNotification('newOrder', { orderId: placedOrder._id, recipient: doctor.userId, triggeredBy: patient._id });
    });
    action.resolve();
  } catch (exception) {
    action.reject(`[createOrder.handler] ${exception}`);
  }
};

export default options =>
  new Promise((resolve, reject) =>
    createOrder(options, { resolve, reject }));
