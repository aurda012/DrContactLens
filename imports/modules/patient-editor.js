/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertPatient } from '../api/patients/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { pat } = component.props;
  const confirmation = pat && pat._id ? 'Patient updated!' : 'Patient added!';
  const upsert = {
    firstName: patient.querySelector('[name="firstName"]').value.trim(),
    lastName: patient.querySelector('[name="lastName"]').value.trim(),
  };

  if (pat && pat._id) upsert._id = pat._id;

  upsertPatient.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.patientEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/patients/${insertedId || pat._id}`);
    }
  });
};

const validate = () => {
  $(component.patientEditorForm).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
    },
    messages: {
      firstName: {
        required: 'Need a first name in here, Seuss.',
      },
      lastName: {
        required: 'This thneeds a last name, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function patientEditor(options) {
  component = options.component;
  validate();
}
