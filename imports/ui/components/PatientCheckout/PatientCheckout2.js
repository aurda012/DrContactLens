/* eslint-disable max-len, no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedSelect from 'react-virtualized-select';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Label } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import patientEditor from '../../../modules/patient-editor.js';
import Card from '../Card/Card';

import './PatientCheckout.scss';

const STATES = require('../../../api/data/states');

class PatientOrderForm2 extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  componentDidMount() {
    patientEditor({ component: this });
  }
  render() {
    const options = STATES.US;
    const { doc } = this.props;
    return (<form
      ref={ form => (this.patientEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <h4 style={{ marginTop: '0' }} className="page-header">Shipping Address</h4>
      <Row>
        <Col xs={ 12 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Street Address</ControlLabel>
            <FormControl
              type="text"
              name="streetAddress"
              defaultValue={ doc && doc.streetAddress }
              placeholder="Street Address.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl
              type="text"
              name="cityAddress"
              defaultValue={ doc && doc.cityAddress }
              placeholder="City.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 12 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <VirtualizedSelect
              name="stateAddress"
              options={options}
              onChange={selectValue => this.setState({ selectValue })}
              value={this.state.selectValue}
              defaultValue={ doc && doc.stateAddress }
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl
              type="text"
              name="zipAddress"
              defaultValue={ doc && doc.zipAddress }
              placeholder="Zip Code.."
            />
          </FormGroup>
        </Col>
      </Row>
      <h4 className="page-header">Enter Credit Card</h4>
      <div className="CardForm">
        <label className="Label SecureStripe"><i className="fa fa-lock" /> Payments securely processed by Stripe</label>
        <Card ref={card => (this.card = card)} />
      </div>
      <Button type="submit" style={{ float: 'right' }} bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Place Order' }
      </Button>
      </form>);
  }
}

PatientOrderForm2.propTypes = {
  doc: PropTypes.object,
};

export default PatientOrderForm2;
