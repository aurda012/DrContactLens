/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertContact } from '../api/catalog/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Contact updated!' : 'Contact added!';
  const upsert = {
    MAN_NAME: document.querySelector('[name="MAN_NAME"]').value.trim(),
    SER_NAME: document.querySelector('[name="SER_NAME"]').value.trim(),
    SER_WHOLESALE: document.querySelector('[name="SER_WHOLESALE"]').value.trim(),
    SER_RETAIL: document.querySelector('[name="SER_RETAIL"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertContact.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.contactEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/admin/contacts/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.contactEditorForm).validate({
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

export default function contactEditor(options) {
  component = options.component;
  validate();
}
