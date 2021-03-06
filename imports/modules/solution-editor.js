/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertSolution } from '../api/solutions/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Solution updated!' : 'Solution added!';
  const upsert = {
    manufacturer: document.querySelector('[name="manufacturer"]').value.trim(),
    brandName: document.querySelector('[name="brandName"]').value.trim(),
    wholesalePrice: document.querySelector('[name="wholesalePrice"]').value.trim(),
    retailPrice: document.querySelector('[name="retailPrice"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertSolution.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.solutionEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/admin/solutions/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.solutionEditorForm).validate({
    rules: {
      manufacturer: {
        required: true,
      },
      brandName: {
        required: true,
      },
      wholesalePrice: {
        required: true,
      },
      retailPrice: {
        required: false,
      },
    },
    messages: {
      manufacturer: {
        required: 'Need a manufacturer in here, please.',
      },
      brandName: {
        required: 'This needs a brand name, please.',
      },
      wholesalePrice: {
        required: 'This needs a wholesale price, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function solutionEditor(options) {
  component = options.component;
  validate();
}
