import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Doctors from '../../../api/doctors/doctors';
import { createDoctor, createSubscription } from './index';

let action;

const createDoctorInDatabase = Meteor.bindEnvironment((doctor) => {
  try {
    return Doctors.insert(doctor);
  } catch (exception) {
    action.reject(`[handleSignup.createDoctorInDatabase] ${exception}`);
  }
});

const createSubscriptionOnStripe = ({ doctor, plan }) => {
  try {
    return createSubscription({ doctor, plan })
      .then(subscription => subscription)
      .catch(error => error);
  } catch (exception) {
    action.reject(`[handleSignup.createSubscriptionOnStripe] ${exception}`);
  }
};

const createDoctorOnStripe = ({ userId, profile, email }, source) => {
  try {
    return createDoctor({ email, source, metadata: profile.name })
      .then(({ id, sources }) => {
        const card = sources.data[0];
        return { card, id };
      })
      .catch(error => action.reject(error));
  } catch (exception) {
    action.reject(`[handleSignup.createDoctorOnStripe] ${exception}`);
  }
};

const createUser = ({ email, password, profile }) => {
  try {
    return Accounts.createUser({ email, password, profile });
  } catch (exception) {
    action.reject(`[handleSignup.createUser] ${exception}`);
  }
};

const handleSignup = (options, promise) => {
  try {
    action = promise;
    const userId = createUser(options.user);

    createDoctorOnStripe({ ...options.user, userId }, options.source)
      .then(Meteor.bindEnvironment((doctor) => {
        createSubscriptionOnStripe({ userId, doctor: doctor.id, plan: options.user.plan })
          .then(({ id, status, items, current_period_end }) => {
            createDoctorInDatabase({
              userId,
              firstName: doctor.firstName,
              lastName: doctor.lastName,
              practiceName: doctor.practiceName,
              practicePhone: doctor.practicePhone,
              practiceStreet: doctor.practiceStreet,
              practiceCity: doctor.practiceCity,
              practiceState: doctor.practiceState,
              practiceZip: doctor.practiceZip,
              doctorId: doctor.id,
              card: { brand: doctor.card.brand, last4: doctor.card.last4 },
              subscription: { id, status, plan: items.data[0].plan.id, current_period_end },
            });
            action.resolve();
          });
      }))
      .catch(error => action.reject(`[handleSignup] ${error}`));
  } catch (exception) {
    action.reject(`[handleSignup] ${exception}`);
  }
};

export default doctor =>
  new Promise((resolve, reject) =>
    handleSignup(doctor, { resolve, reject }));
