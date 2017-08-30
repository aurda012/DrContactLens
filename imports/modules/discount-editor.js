/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertDiscount } from '../api/discounts/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Discount updated!' : 'Discount added!';
  const upsert = {
    discountCode: document.querySelector('[name="discountCode"]').value.trim(),
    startDate: document.querySelector('[name="startDate"]').value.trim(),
    endDate: document.querySelector('[name="endDate"]').value.trim(),
    discountAmount: document.querySelector('[name="discountAmount"]').value.trim(),
    minimumSpend: document.querySelector('[name="minimumSpend"]').value.trim(),
    discountType: document.querySelector('[name="discountType"]').value.trim(),
    uses: document.querySelector('[name="uses"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertDiscount.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.discountEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/doctor/discounts/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.discountEditorForm).validate({
    rules: {
      discountCode: {
        required: true,
      },
    },
    messages: {
      discountCode: {
        required: 'Need a discount code here, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function discountEditor(options) {
  component = options.component;
  validate();
}
