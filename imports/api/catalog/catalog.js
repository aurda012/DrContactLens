import { Mongo } from 'meteor/mongo';

const Catalog = new Mongo.Collection('Catalog');

Catalog.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Catalog.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default Catalog;
