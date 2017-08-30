import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const PendingOrders = new Mongo.Collection('PendingOrders');

PendingOrders.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

PendingOrders.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const PendingOrdersSchema = new SimpleSchema({
  ownerId: {
    type: String,
    label: 'The ID of the patient this order belongs to.',
  },
  doctorId: {
    type: String,
    label: 'The ID of the doctor this order belongs to.',
  },
  accountId: {
    type: String,
    label: 'The ID of the patient this order belongs to.',
  },
  customerId: {
    type: String,
    label: 'The Customer ID of the patient in Stripe.',
  },
  quantityRight: {
    type: Number,
    label: 'Quantity of boxes for Right.',
  },
  quantityLeft: {
    type: Number,
    label: 'Quantity of boxes for Left.',
  },
  firstName: {
    type: String,
    label: 'The first name of the patient.',
  },
  lastName: {
    type: String,
    label: 'The last name of the patient.',
  },
  brandRight: {
    type: String,
    label: 'The brand of the right eye.',
  },
  brandLeft: {
    type: String,
    label: 'The brand of the left eye.',
  },
  orderTotal: {
    type: String,
    label: 'Total amount for order.',
  },
  seriesLeft: {
    type: String,
    label: 'Series ID of the left Product.',
  },
  seriesRight: {
    type: String,
    label: 'Series ID of the right Product.',
  },
});

PendingOrders.schema = PendingOrdersSchema;

export default PendingOrders;
