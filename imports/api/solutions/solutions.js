import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Solutions = new Mongo.Collection('Solutions');

Solutions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Solutions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const SolutionsSchema = new SimpleSchema({
  manufacturer: {
    type: String,
    label: 'Manufacturer of the solutions.',
  },
  brandName: {
    type: String,
    label: 'Brand Name of the solutions.',
  },
  wholesalePrice: {
    type: String,
    label: 'Wholesale price of the solutions.',
  },
  retailPrice: {
    type: String,
    label: 'Retail price of the solutions.',
  },
});

Solutions.attachSchema(SolutionsSchema);

export default Solutions;
