/* eslint-disable no-undef, no-underscore-dangle */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import ip from 'ip';
import './validation';

let component;

const getUserData = () => ({
  email: component.emailAddress.value,
  password: component.password.value,
  plan: document.querySelector('[name="plan"]:checked').value,
  profile: {
    name: {
      first: component.firstName.value,
      last: component.lastName.value,
    },
    dob: {
      day: component.dobDay.value,
      month: component.dobMonth.value,
      year: component.dobYear.value,
    },
    ssn: component.ssn.value,
    practiceName: component.practiceName.value,
    practiceAddress: component.practiceAddress.value,
    practiceAddress2: component.practiceAddress2.value,
    practiceCity: component.practiceCity.value,
    practiceState: component.state.selectState.value,
    practiceZip: component.practiceZip.value,
    practicePhone: component.practicePhone.value,
    practiceType: 'company',
  },
  tosIP: ip.address(),
  roles: ['doctor'],
});

const signup = async () => {
  component.setProcessingState({ processing: true });
  const connectToken = await window.stripe.createToken(component.card.card, { currency: 'USD' });
  const subscriptionToken = await window.stripe.createToken(component.card.card, { currency: 'USD' });
  const user = getUserData();
  const password = user.password;
  user.password = Accounts._hashPassword(user.password);

  Meteor.call('signup', {
    connectToken: connectToken.token.id,
    subscriptionToken: subscriptionToken.token.id,
    user,
  }, (methodError) => {
    if (methodError) {
      component.setProcessingState({ processing: false });
      Bert.alert(methodError.reason, 'danger');
    } else {
      Meteor.loginWithPassword(user.email, password, (loginError) => {
        if (loginError) {
          Bert.alert(loginError.reason, 'danger');
        } else {
          Bert.alert('Welcome to Dr. Contact Lens!', 'success');
          browserHistory.push('/doctor');
          component.setProcessingState({ processing: false });
        }
      });
    }
  });
};

const validate = () => {
  $(component.signupForm).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      firstName: {
        required: 'First name?',
      },
      lastName: {
        required: 'Last name?',
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { signup(); },
  });
};

export default function handleSignup(options) {
  component = options.component;
  validate();
}
