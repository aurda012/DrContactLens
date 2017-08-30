/* eslint-disable max-len, no-return-assign */
/* eslint-disable max-len */

import React, { PropTypes } from 'react';
import { Alert, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Bert } from 'meteor/themeteorchef:bert';
import Customers from '../../api/customers/customers';
import Card from '../components/Card/Card';
import DoctorBillingTable from '../components/Tables/DoctorBillingTable';

class DoctorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { changingPlan: false, updatingPayment: false };

    this.handleUpdatePayment = this.handleUpdatePayment.bind(this);
  }

  handleUpdatePayment(event) {
    event.preventDefault();
    window.stripe.createToken(this.cardForm.card)
      .then(({ token }) => {
        Meteor.call('updatePayment', token.id, (error) => {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            this.setState({ updatingPayment: false });
            Bert.alert('Payment method updated!', 'success');
          }
        });
      })
      .catch((error) => {
        Bert.alert(error.reason, 'danger');
      });
  }

  renderUpdatePayment() {
    const { customer } = this.props;
    const card = customer.card;
    return (<div className="UpdatePayment">
      <div className="CardForm">
        <label className="Label SecureStripe"><i className="fa fa-lock" /> Payments securely processed by Stripe</label>
        <Card ref={cardForm => (this.cardForm = cardForm)} />
      </div>
      <Button bsStyle="success" onClick={this.handleUpdatePayment}>Update Payment</Button>
    </div>);
  }

  render() {
    const { customer } = this.props;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 style={{ margin: '5px' }}><strong>Doctor Profile</strong></h4>
              </div>
              <div className="card-block">
                <ListGroupItem>
                  <Row>
                    <Col xs={12} sm={3} md={3}>
                      <p><strong>Payment Method</strong></p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                      <p><strong>{customer.card.brand}</strong> ending in <strong>{customer.card.last4}</strong></p>
                    </Col>
                    <Col xs={12} sm={3} md={3}>
                      <Button
                        onClick={() => { this.setState({ updatingPayment: !this.state.updatingPayment }); }}
                        bsStyle="default"
                        block
                      >{this.state.updatingPayment ? 'Cancel' : 'Update Payment'}</Button>
                    </Col>
                  </Row>
                  {this.state.updatingPayment ? this.renderUpdatePayment() : ''}
                </ListGroupItem>
                <h3 className="page-header">Billing History</h3>
                <DoctorBillingTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


DoctorProfile.propTypes = {
  customer: PropTypes.object,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('customer.subscription');
  if (subscription.ready()) {
    const customer = Customers.findOne();
    onData(null, { customer });
  }
};

export default composeWithTracker(composer)(DoctorProfile);

