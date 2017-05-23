import { Mongo } from 'meteor/mongo';

const Discounts = new Mongo.Collection('Discounts');

Discounts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Discounts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default Discounts;
