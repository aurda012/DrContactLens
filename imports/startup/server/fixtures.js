import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Plans from '../../api/plans/plans';

if (!Meteor.isProduction) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: {first: 'Carl', last: 'Winslow'},
    },
    roles: ['admin'],
  }, {
    email: 'example@doctor.com',
    password: 'password',
    profile: {
      name: {first: 'Patrick', last: 'Winslow'},
    },
    roles: ['doctor'],
  }];

  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}

const plans = [{
  planId: 'admin',
  label: 'Admin Account (Wholesaler to other Doctors)',
  price: 99999,
}, {
  planId: 'doctor',
  label: 'Doctor Portal',
  price: 9999,
}, {
  planId: 'doctor-admin',
  label: 'Extra Doctor Portal Admin (Large Practice)',
  price: 999,
}, {
  planId: 'patient',
  label: 'Patient',
  price: 499,
}];

plans.forEach(({ planId, label, price }) => {
  const planExists = Plans.findOne({ planId });
  if (!planExists) Plans.insert({ planId, label, price });
});
