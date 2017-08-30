import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const approvedOrder = (close) => {
  alert('The order was approved.');
  close();
};

export const TermsOfServiceBody = () => (
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
            defaultValue="$"
            placeholder="Coverage Amount.."
          />
        </FormGroup>
      </Col>
    </Row>
  </div>
);

export const TermsOfServiceFooter = ({ modal }) => (
  <div>
    <Button onClick={ modal.close } bsStyle="default">Close</Button>
    <Button onClick={() => { approvedOrder(modal.close); }} bsStyle="success">Approve Insurance</Button>
  </div>
);
