/* eslint-disable new-cap */

import React from 'react';
import Stripe from '../../modules/stripe';

class Card extends React.Component {
  componentDidMount() {
    Stripe((stripe) => {
      this.elements = stripe.elements();
      this.style = {
        base: {
          color: '#32325d',
          lineHeight: '24px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      };
      this.card = this.elements.create('card', { style: this.style });
      this.card.mount('#card-element');

      this.card.addEventListener('change', ({ error }) => {
        const displayError = document.querySelector('.card-errors');

        if (error) {
          displayError.textContent = error.message;
          displayError.style.display = 'block';
        } else {
          displayError.style.display = 'none';
        }
      });
    });
  }

  render() {
    return (<div className="Card">
      <label htmlFor="card-element">Credit or Debit Card</label>
      <div id="card-element" />
      <div id="card-errors" role="alert" />
    </div>);
  }
}

Card.propTypes = {};

export default Card;
