/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertPatient } from '../api/patients/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Patient updated!' : 'Patient added!';
  const upsert = {
    firstName: document.querySelector('[name="firstName"]').value.trim(),
    lastName: document.querySelector('[name="lastName"]').value.trim(),
    emailAddress: document.querySelector('[name="emailAddress"]').value.trim(),
    patientStatus: document.querySelector('[name="patientStatus"]').value.trim(),
    contactBrand: document.querySelector('[name="contactBrand"]').value.trim(),
    powerRight: document.querySelector('[name="powerRight"]').value.trim(),
    powerLeft: document.querySelector('[name="powerLeft"]').value.trim(),
    cylinderRight: document.querySelector('[name="cylinderRight"]').value.trim(),
    cylinderLeft: document.querySelector('[name="cylinderLeft"]').value.trim(),
    axisRight: document.querySelector('[name="axisRight"]').value.trim(),
    axisLeft: document.querySelector('[name="axisLeft"]').value.trim(),
    addPowerRight: document.querySelector('[name="addPowerRight"]').value.trim(),
    addPowerLeft: document.querySelector('[name="addPowerLeft"]').value.trim(),
    baseCurveRight: document.querySelector('[name="baseCurveRight"]').value.trim(),
    baseCurveLeft: document.querySelector('[name="baseCurveLeft"]').value.trim(),
    diameterRight: document.querySelector('[name="diameterRight"]').value.trim(),
    diameterLeft: document.querySelector('[name="diameterLeft"]').value.trim(),
    lastExam: document.querySelector('[name="lastExam"]').value.trim(),
    prescriptionExpiration: document.querySelector('[name="prescriptionExpiration"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertPatient.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.patientEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/doctor/patients/${response.insertedId || doc._id}`);
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
      emailAddress: {
        required: true,
      },
      patientStatus: {
        required: true,
      },
    },
    messages: {
      firstName: {
        required: 'Need a first name in here, please.',
      },
      lastName: {
        required: 'This needs a last name, please.',
      },
      emailAddress: {
        required: 'This needs an email address, please.',
      },
      patientStatus: {
        required: 'This needs a patient status, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function patientEditor(options) {
  component = options.component;
  validate();
}
