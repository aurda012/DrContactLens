/* eslint-disable no-undef, no-underscore-dangle */

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const getEmail = () => ({
  email: component.emailAddress.value,
});

const patientEmail = () => {
  component.setProcessingState({ processing: true });
  const patient = getEmail();
  const patEmail = patient.email;
  console.log(patEmail);

  Meteor.call('handleEmail', {
    patEmail,
  }, (methodError) => {
    if (methodError) {
      component.setProcessingState({ processing: false });
      Bert.alert(methodError.reason, 'danger');
      console.log(methodError.reason);
    } else {
      Bert.alert('Check your email!', 'success');
      component.setProcessingState({ processing: false });
    }
  });
};

const validate = () => {
  $(component.patientEmailForm).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true,
      },
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
    },
    submitHandler() { patientEmail(); },
  });
};

export default function handlePatientEmail(options) {
  component = options.component;
  validate();
}
