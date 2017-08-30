/* eslint-disable consistent-return,max-len */

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import Customers from '../../../api/customers/customers';
import Patients from '../../../api/patients/patients';
import PendingOrders from '../../../api/pending-orders/pending-orders';
import { createCustomer, createCharge } from './index';
import placeOrder from './place-order';
import createNotification from '../create-notification';
import sendEmailNotification from '../send-email-notifications';

let action;

const createCustomerOnStripe = ({ email }, source) => {
  try {
    return createCustomer({ email, source })
      .then(({ id, sources }) => {
        const card = sources.data[0];
        return { card, id };
      })
      .catch(error => action.reject(error));
  } catch (exception) {
    action.reject(`[handleCheckout.createCustomerOnStripe] ${exception}`);
  }
};

const createPendingOrder = Meteor.bindEnvironment((order) => {
  try {
    return PendingOrders.insert(order);
  } catch (exception) {
    action.reject(`[handleCheckout.createPendingOrder] ${exception}`);
  }
});

const handleCheckout = (options, promise) => {
  try {
    action = promise;
    const patient = Patients.findOne(options.order.ownerId);
    const doctor = Customers.findOne({ userId: patient.owner });
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const dateCreated = (`${mm}/${dd}/${yyyy}`);
    const cardToCharge = options.order.source.token.id;
    const stripeAmount = ((options.order.orderTotal) * 100);
    const quantRight = options.order.quantityRight;
    const quantLeft = options.order.quantityLeft;

    if (options.order.insurance === true) {
      createCustomerOnStripe({ email: patient.emailAddress }, cardToCharge)
        .then(Meteor.bindEnvironment((customer) => {
          const orderId = createPendingOrder({
            ownerId: options.order.ownerId,
            doctorId: patient.owner,
            customerId: customer.id,
            accountId: doctor.accountId,
            createdAt: dateCreated,
            patientFirst: patient.firstName,
            patientLast: patient.lastName,
            quantityRight: options.order.quantityRight,
            quantityLeft: options.order.quantityLeft,
            brandRight: patient.contactBrandRight,
            brandLeft: patient.contactBrandLeft,
            orderTotal: options.order.orderTotal,
            seriesLeft: options.product.seriesLeft,
            seriesRight: options.product.seriesRight,
          });
          sendEmailNotification('pendingOrderPlaced', { to: doctor.email });
          createNotification('newPendingOrder', { orderId, recipient: doctor.userId, triggeredBy: patient._id });
        }));
    } else {
      createCustomerOnStripe({ email: patient.emailAddress }, cardToCharge)
      .then(Meteor.bindEnvironment((customer) => {
        placeOrder({ customer: customer.id, patient, doctor, dateCreated, stripeAmount, quantRight, quantLeft, seriesLeft: options.product.seriesLeft, seriesRight: options.product.seriesRight });
      }));
    }
  } catch (exception) {
    action.reject(`[handleCheckout] ${exception}`);
  }
};

export default order =>
  new Promise((resolve, reject) =>
    handleCheckout(order, { resolve, reject }));
