/* eslint-disable consistent-return,max-len */

import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Customers from '../../../api/customers/customers';
import { createCustomer, createSubscription, createAccount } from './index';
import sendEmailNotification from '../send-email-notifications';
import createNotification from '../create-notification';

let action;

const createAccountOnStripe = ({ email, profile, tosIP, userId }, source) => {
  try {
    console.log('source in createAccount', source);
    return createAccount({
      managed: true,
      email,
      external_account: source,
      business_name: profile.practiceName,
      country: 'US',
      tos_acceptance: {
        date: Math.floor(Date.now() / 1000),
        ip: tosIP,
      },
      legal_entity: {
        address: {
          city: profile.practiceCity,
          line1: profile.practiceAddress,
          line2: profile.practiceAddress2,
          postal_code: profile.practiceZip,
          state: profile.practiceState,
        },
        dob: {
          day: profile.dob.day,
          month: profile.dob.month,
          year: profile.dob.year,
        },
        ssn_last_4: profile.ssn,
        business_name: profile.practiceName,
        first_name: profile.name.last,
        last_name: profile.name.last,
        type: profile.practiceType,
      } })
      .then((account) => {
        return account;
      })
      .catch(error => action.reject(error));
  } catch (exception) {
    action.reject(`[handleSignup.createCustomerOnStripe] ${exception}`);
  }
};

const createCustomerInDatabase = Meteor.bindEnvironment((customer) => {
  try {
    return Customers.insert(customer);
  } catch (exception) {
    action.reject(`[handleSignup.createCustomerInDatabase] ${exception}`);
  }
});

const createSubscriptionOnStripe = ({ customer, plan }) => {
  try {
    return createSubscription({ customer, plan })
      .then(subscription => subscription)
      .catch(error => error);
  } catch (exception) {
    action.reject(`[handleSignup.createSubscriptionOnStripe] ${exception}`);
  }
};

const createCustomerOnStripe = ({ userId, profile, email }, source) => {
  try {
    console.log('source in createCustomer', source);
    return createCustomer({ email, source, metadata: profile.name })
      .then(({ id, sources }) => {
        const card = sources.data[0];
        return { card, id };
      })
      .catch(error => action.reject(error));
  } catch (exception) {
    action.reject(`[handleSignup.createCustomerOnStripe] ${exception}`);
  }
};

const getUserByEmail = email => {
  try {
    return Meteor.users.findOne({ 'emails.address': email }, { fields: { email: 1 } });
  } catch (exception) {
    action.reject(`[handleSignup.getUserByEmail] ${exception}`);
  }
};

const createUser = ({ email, password, profile, roles }) => {
  try {
    const user = Accounts.createUser({ email, password, profile, roles });
    Roles.addUsersToRoles(user, roles);
    return user;
  } catch (exception) {
    action.reject(`[handleSignup.createUser] ${exception}`);
  }
};

const handleSignup = (options, promise) => {
  try {
    action = promise;
    const userId = createUser(options.user);
    const admin = getUserByEmail('support@drcontactlens.com');

    createAccountOnStripe({ email: options.user.email, profile: options.user.profile, tosDate: options.user.tosDate, tosIP: options.user.tosIP, practiceDetails: options.user.practiceDetails, userId }, options.connectToken)
      .then(Meteor.bindEnvironment((account) => {
        createCustomerOnStripe({ ...options.user, userId }, options.subscriptionToken)
          .then(Meteor.bindEnvironment((customer) => {
            createSubscriptionOnStripe({ userId, customer: customer.id, plan: options.user.plan })
              .then(Meteor.bindEnvironment(({ id, status, items, current_period_end }) => {
                createCustomerInDatabase({
                  userId,
                  email: account.email,
                  customerId: customer.id,
                  accountId: account.id,
                  card: { brand: customer.card.brand, last4: customer.card.last4 },
                  subscription: { id, status, plan: items.data[0].plan.id, current_period_end },
                });
                sendEmailNotification('doctorWelcome', { to: options.user.email });
                createNotification('newDoctor', { recipient: admin._id, triggeredBy: userId });
                action.resolve();
              }));
          }));
    }))
    .catch(error => action.reject(`[handleSignup] ${error}`));
  } catch (exception) {
    action.reject(`[handleSignup] ${exception}`);
  }
};

export default customer =>
  new Promise((resolve, reject) =>
    handleSignup(customer, { resolve, reject }));
