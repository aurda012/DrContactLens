/* eslint-disable max-len */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Doctors = new Mongo.Collection('Doctors');

Doctors.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Doctors.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const AddressSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100,
  },
  city: {
    type: String,
    max: 50,
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/,
  },
});

const DoctorsSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'The ID of the user this doctor profile belongs to.',
  },
  firstName: {
    type: String,
    label: 'The first name the user this doctor profile belongs to.',
  },
  lastName: {
    type: String,
    label: 'The last name of the user this doctor profile belongs to.',
  },
  practiceName: {
    type: String,
    label: 'The practice name of the user this doctor profile belongs to.',
  },
  practicePhone: {
    type: String,
    regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
  },
  practiceStreet: {
    type: String,
    max: 100,
  },
  practiceCity: {
    type: String,
    max: 50,
  },
  practiceState: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
  },
  practiceZip: {
    type: String,
    regEx: /^[0-9]{5}$/,
  },
  doctorId: {
    type: String,
    label: 'The user\'s doctor ID on Stripe.',
  },
  'card.brand': {
    type: String,
    label: 'The brand of credit card the doctor has on file.',
  },
  'card.last4': {
    type: String,
    label: 'The last four digits of the credit card the doctor has on file.',
  },
  'subscription.id': {
    type: String,
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.status': {
    type: String,
    allowedValues: ['active', 'cancelling', 'canceled', 'none', 'trialing'],
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.plan': {
    type: String,
    label: 'The ID of the user\'s plan on Stripe.',
    optional: true,
  },
  'subscription.current_period_end': {
    type: Number,
    label: 'The next change date for the doctor\'s subscription on Stripe (epoch timestamp in seconds).',
    optional: true,
  },
});

Doctors.attachSchema(DoctorsSchema);

export default Doctors;
