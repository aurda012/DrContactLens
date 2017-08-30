import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

const approvedOrder = (close, orderId) => {
  const orderToApprove = {
    insuranceAmount: parseInt(document.querySelector('[name="insuranceAmount').value, 10),
    orderId,
  };

  Meteor.call('orders.approve', orderToApprove, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('The order was approved.', 'success');
    }
  });

  close();
};

export const InsuranceApprovalModalBody = () => (
  <div>
    <Row>
      <Col sm={ 6 }>
        <p>Please Enter Insurance Coverage Amount:</p>
      </Col>
      <Col sm={ 6 }>
        <FormGroup>
          <FormControl
            type="text"
            name="insuranceAmount"
            placeholder="Coverage Amount.."
          />
        </FormGroup>
      </Col>
    </Row>
  </div>
);

export const InsuranceApprovalModalFooter = ({ orderId, modal }) => (
  <div>
    <Button onClick={ modal.close } bsStyle="default">Close</Button>
    <Button onClick={() => { approvedOrder(modal.close, orderId); }} bsStyle="success">Approve Insurance</Button>
  </div>
);
