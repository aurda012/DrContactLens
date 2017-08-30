/* eslint-disable no-undef, no-underscore-dangle */

import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const getInsuranceData = () => ({
  insurance: component.insurance,
});

const approveInsurance = () => {
  component.setProcessingState({ processing: true });
  const insurance = getInsuranceData();

  Meteor.call('approveInsurance', {
    insurance,
  }, (methodError) => {
    if (methodError) {
      component.setProcessingState({ processing: false });
      Bert.alert(methodError.reason, 'danger');
      console.log(methodError.reason);
    } else {
      Bert.alert('Your order was placed!', 'success');
      component.setProcessingState({ processing: false });
    }
  });
};

const validate = () => {
  $(component.approveInsuranceForm).validate({
    rules: {
      insurance: {
        required: true,
      },
    },
    messages: {
      insurance: {
        required: 'Insurance amount?',
      },
    },
    submitHandler() { approveInsurance(); },
  });
};

export default function handleApproveInsurance(options) {
  component = options.component;
  validate();
}
