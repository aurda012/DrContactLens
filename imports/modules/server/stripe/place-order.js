/* eslint-disable consistent-return,max-len */

import { Meteor } from 'meteor/meteor';
import rp from 'request-promise';
import { createCharge } from './index';
import Orders from '../../../api/orders/orders';
import createNotification from '../create-notification';
import sendEmailNotification from '../send-email-notifications';
import buildXmlTemplate from '../../xml-template';

let action;

const insertOrder = Meteor.bindEnvironment((order) => {
  try {
    Orders.insert(order);
  } catch (exception) {
    action.reject(`[createOrder.insertOrder] ${exception}`);
  }
});

const createOrder = ({ customer, patient, doctor, dateCreated, stripeAmount, quantRight, quantLeft, seriesLeft, seriesRight }, promise) => {
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

      const xml = buildXmlTemplate({
        firstName: patient.firstName,
        lastName: patient.lastName,
        streetAddress: patient.streetAddress,
        cityAddress: patient.cityAddress,
        stateAddress: patient.stateAddress,
        zipAddress: patient.zipAddress,
        quantityLeft: quantLeft,
        seriesLeft,
        baseCurveLeft: patient.baseCurveLeft,
        diameterLeft: patient.diameterLeft,
        powerLeft: patient.powerLeft,
        cylinderLeft: patient.cylinderLeft,
        axisLeft: patient.axisLeft,
        quantityRight: quantRight,
        seriesRight,
        baseCurveRight: patient.baseCurveRight,
        diameterRight: patient.diameterRight,
        powerRight: patient.powerRight,
        cylinderRight: patient.cylinderRight,
        axisRight: patient.axisRight,
      });
      rp.post({
        url: 'https://qaservices.abbconcise.com/esbportal/orderservice',
        body: xml,
        headers: {
          'Content-Type': 'text/xml',
        },
      }).then((err) => {
        if (err) {
          console.err('Fail to send SOAP: ', err);
        }
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
