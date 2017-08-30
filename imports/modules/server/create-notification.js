import { Meteor } from 'meteor/meteor';
import Orders from '../../api/orders/orders';
import PendingOrders from '../../api/pending-orders/pending-orders';
import Notifications from '../../api/notifications/notifications';

const getDoctor = (_id) => {
  try {
    return Meteor.users.findOne(_id, { fields: { profile: 1 } });
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
};

const getOrder = (type, _id) => {
  try {
    return { order: Orders, pending: PendingOrders }[type].findOne(_id);
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
};

const insertNotification = (notification) => {
  try {
    return Notifications.insert(notification);
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
};

const notifications = {
  newOrder({ orderId, recipient, triggeredBy, role }) {
    const order = getOrder('order', orderId);
    insertNotification({
      recipient,
      triggeredBy,
      message: `A new order was placed by ${order.patientFirst} ${order.patientLast}.`,
      type: 'order',
      redirectTo: `/${role}/orders`,
    });
  },
  newPendingOrder({ orderId, recipient, triggeredBy }) {
    const order = getOrder('pending', orderId);
    insertNotification({
      recipient,
      triggeredBy,
      message: `${order.patientFirst} ${order.patientLast} has a pending order that needs your approval.`,
      type: 'pending',
      redirectTo: '/doctor/pending-orders',
    });
  },
  newDoctor({ recipient, triggeredBy }) {
    const doctor = getDoctor(triggeredBy);
    const doctorName = `${doctor.profile.name.first} ${doctor.profile.name.last}`;
    insertNotification({
      recipient,
      triggeredBy,
      message: `Dr. ${doctorName} was added.`,
      type: 'doctor',
      redirectTo: '/admin/doctors',
    });
  },
};

export default function (type, payload) {
  const notification = notifications[type];
  if (notification) {
    notification(payload);
  } else {
    throw new Meteor.Error('500', 'Sorry, that notification does not exist.');
  }
}
