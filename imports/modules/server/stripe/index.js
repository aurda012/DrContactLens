/* eslint-disable new-cap */

import Stripe from 'stripe';
import { Meteor } from 'meteor/meteor';
import doctorSubscriptionDeleted from './webhooks/doctor.subscription.deleted';
import doctorSubscriptionUpdated from './webhooks/doctor.subscription.updated';
import invoicePaymentSucceeded from './webhooks/invoice.payment_succeeded';

const stripe = Stripe(Meteor.settings.private.stripe);

export const webhooks = {
  'doctor.subscription.deleted': doctorSubscriptionDeleted,
  'doctor.subscription.updated': doctorSubscriptionUpdated,
  'invoice.payment_succeeded': invoicePaymentSucceeded,
};

/*
 doctor = {
 description: String,
 source: String, // A Stripe token from the client.
 };
 */
export const createDoctor = doctor =>
  stripe.doctors.create(doctor);

/*
 doctorId: String,
 update: Object, // Contains properties to update on Stripe. For example: { source: <token> }
 */
export const updateDoctor = (doctorId, update) =>
  stripe.doctors.update(doctorId, update);

/*
 subscription = {
 doctor: String, // ID of the doctor on Stripe. For example: cus_AGLTqnNknWBxKF.
 plan: String, // The ID of the plan to subscribe the doctor to. For example: large.
 };
 */
export const createSubscription = subscription =>
  stripe.subscriptions.create(subscription);

/*
 subscriptionId = String; // The ID of the subscription on Stripe. For example: sub_AGLTRCbGMwmQcQ.
 */
export const cancelSubscription = subscriptionId =>
  stripe.subscriptions.del(subscriptionId, { at_period_end: true });

/*
 subscriptionId = String; // The ID of the subscription on Stripe. For example: sub_AGLTRCbGMwmQcQ.
 update = Object; // Contains properties to update on Stripe. For example: { plan: "large" }
 */
export const changeSubscription = (subscriptionId, update) =>
  stripe.subscriptions.update(subscriptionId, update);
