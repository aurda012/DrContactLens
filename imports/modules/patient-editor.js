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
    phoneNumber: document.querySelector('[name="phoneNumber"]').value.trim(),
    dateOfBirth: component.dateOfBirth.state.value.toString(),
    insuranceCompany: document.querySelector('[name="insuranceCompany"]').value.trim(),
    insuranceId: document.querySelector('[name="insuranceId"]').value.trim(),
    streetAddress: document.querySelector('[name="streetAddress"]').value.trim(),
    cityAddress: document.querySelector('[name="cityAddress"]').value.trim(),
    stateAddress: document.querySelector('[name="stateAddress"]').value.trim(),
    zipAddress: document.querySelector('[name="zipAddress"]').value.trim(),
    lastExam: component.lastExam.state.value.toString(),
    prescriptionExpiration: component.prescriptionExpiration.state.value.toString(),
    contactBrandRight: document.querySelector('[name="contactBrandRight"]').value.trim(),
    contactBrandLeft: document.querySelector('[name="contactBrandLeft"]').value.trim(),
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
    colorRight: document.querySelector('[name="colorRight"]').value.trim(),
    colorLeft: document.querySelector('[name="colorLeft"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertPatient.call(upsert, (error, response) => {
    if (error) {
      console.log(error);
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
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function patientEditor(options) {
  component = options.component;
  validate();
}
