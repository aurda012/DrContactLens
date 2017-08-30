/* eslint-disable consistent-return,max-len */

import { Meteor } from 'meteor/meteor';
import PendingOrders from '../../../api/pending-orders/pending-orders';
import Customers from '../../../api/customers/customers';
import Patients from '../../../api/patients/patients';
import placeOrder from './place-order';

let action;

const deletePendingOrder = (orderId) => {
  try {
    return PendingOrders.remove(orderId);
  } catch (exception) {
    action.reject(`[handlePending.deletePendingOrder] ${exception}`);
  }
};

const getPendingOrder = (order) => {
  try {
    return PendingOrders.findOne(order);
  } catch (exception) {
    action.reject(`[handlePending.getPendingOrder] ${exception}`);
  }
};

const handlePending = (options, promise) => {
  try {
    action = promise;
    const order = getPendingOrder(options.orderId);
    const patient = Patients.findOne(order.ownerId);
    const doctor = Customers.findOne({ userId: patient.owner });
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const dateCreated = (`${mm}/${dd}/${yyyy}`);
    const insuranceAmountInCents = (options.insuranceAmount * 100);
    const stripeAmount = ((order.orderTotal * 100) - insuranceAmountInCents);

    placeOrder({ customer: order.customerId, patient, doctor, dateCreated, stripeAmount, quantRight: order.quantityRight, quantLeft: order.quantityLeft, seriesLeft: options.product.seriesLeft, seriesRight: options.product.seriesRight })
    .then(Meteor.bindEnvironment(() => {
      deletePendingOrder(options.orderId);
    }))
    .catch((error) => {
      action.reject(error);
    });

    action.resolve();
  } catch (exception) {
    action.reject(`[handlePending.handler] ${exception}`);
  }
};

export default options =>
  new Promise((resolve, reject) =>
    handlePending(options, { resolve, reject }));
