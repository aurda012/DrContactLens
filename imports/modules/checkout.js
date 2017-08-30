/* eslint-disable no-undef, no-underscore-dangle */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';

let component;

const getOrderData = () => ({
  ownerId: component.props.doc._id,
  quantityRight: component.state.boxR,
  quantityLeft: component.state.boxL,
  orderTotal: component.order,
  insurance: component.state.insurance,
});

const productData = () => ({
  seriesLeft: component.props.catalog[component.state.currentCatalogIdL].SER_ID,
  seriesRight: component.props.catalog[component.state.currentCatalogIdR].SER_ID,
});

const checkout = async () => {
  component.setProcessingState({ processing: true });
  const order = getOrderData();
  const product = productData();
  order.source = await window.stripe.createToken(component.card.card, { currency: 'USD' });

  Meteor.call('checkout', {
    order,
    product,
  }, (methodError) => {
    if (methodError) {
      component.setProcessingState({ processing: false });
      Bert.alert(methodError.reason, 'danger');
      console.log(methodError.reason);
    } else {
      Bert.alert('Your order was processed!', 'success');
      component.setProcessingState({ processing: false });
    }
  });
};

const validate = () => {
  $(component.handleCheckoutForm).validate({
    rules: {
      ownerId: {
        required: true,
      },
    },
    messages: {
      ownerId: {
        required: 'Owner Id?',
      },
    },
    submitHandler() { checkout(); },
  });
};

export default function handleCheckout(options) {
  component = options.component;
  validate();
}
