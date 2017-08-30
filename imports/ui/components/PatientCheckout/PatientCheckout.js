/* eslint-disable no-trailing-spaces,max-len */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
import VirtualizedSelect from 'react-virtualized-select';
import { Row, Col, FormGroup, ControlLabel, FormControl, Panel, Button, Checkbox, ListGroup } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import handleCheckout from '../../../modules/checkout.js';
import Catalog from '../../../api/catalog/catalog';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

import './PatientCheckout.scss';

const STATES = require('../../../api/data/states');

const BOXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class PatientOrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false,
      currentCatalogIdR: 0,
      currentCatalogIdL: 0,
      boxR: 1,
      boxL: 1,
      insurance: false,
    };

    this.setProcessingState = this.setProcessingState.bind(this);
    this.changeBrandRight = this.changeBrandRight.bind(this);
    this.changeBrandLeft = this.changeBrandLeft.bind(this);
    this.changeBoxRight = this.changeBoxRight.bind(this);
    this.changeBoxLeft = this.changeBoxLeft.bind(this);
  }
  componentDidMount() {
    handleCheckout({ component: this });
  }

  changeBrandRight(e) {
    this.setState({
      currentCatalogIdR: e.target.value,
    });
  }

  setProcessingState(state) {
    this.setState(state);
  }

  changeBrandLeft(e) {
    this.setState({
      currentCatalogIdL: e.target.value,
    });
  }

  changeBoxRight(e) {
    this.setState({
      boxR: e.target.value,
    });
  }

  changeBoxLeft(e) {
    this.setState({
      boxL: e.target.value,
    });
  }

  render() {
    const boxes = BOXES;
    const options = STATES.US;
    const { doc, catalog } = this.props;
    const orderTotal = (Math.round(((parseInt(this.state.boxR) * (catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].SER_RETAIL)) + (parseInt(this.state.boxL) * (catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].SER_RETAIL))) * 100) / 100);
    return (<form
      ref={ form => (this.handleCheckoutForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <h2 style={{ textAlign: 'center', color: 'black', marginTop: '0', marginBottom: '25px' }}>{doc && doc.firstName}, here's your order:</h2>
      <div style={{ border: '1px solid #ccc' }}>
        <h3 style={{ textAlign: 'center', color: 'black', marginTop: '15px', marginBottom: '20px' }}>{ catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].SER_NAME }</h3>
        <img src={`../img/${catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].SER_ID}.jpg`} style={{ width: '50%', marginLeft: '25%' }} />
        <h3 style={{ textAlign: 'center', color: 'black', marginTop: '20px' }} name="order-total">
          Order Total: ${this.order = orderTotal}

        </h3>
        <Row style={{ width: '80%', marginLeft: '10%', marginTop: '15px', marginBottom: '15px' }}>
          <Col xs={ 6 } sm={ 6 }>
            <FormGroup>
              <ControlLabel>Right Eye - Boxes</ControlLabel>
              <FormControl onChange={this.changeBoxRight} componentClass="select" placeholder="select" defaultValue={ this.state.boxL }>
                {boxes.map((box, index) => (
                  <option key={ index } value={ box }>{ box }</option>
                ))}
              </FormControl>
            </FormGroup>
          </Col>
          <Col xs={ 6 } sm={ 6 }>
            <FormGroup>
              <ControlLabel>Left Eye - Boxes</ControlLabel>
              <FormControl onChange={this.changeBoxLeft} componentClass="select" placeholder="select" defaultValue={ this.state.boxL }>
                {boxes.map((box, index) => (
                  <option key={ index } value={ box }>{ box }</option>
                ))}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ width: '80%', marginLeft: '10%', marginTop: '15px', marginBottom: '15px' }}>
          <Col xs={ 6 } sm={ 6 }>
            <ListGroup>
              <li className="list-group-item"><strong>Duration: </strong>&nbsp;{ (parseInt(this.state.boxR) * (catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].SER_DURATION)) } Days</li>
            </ListGroup>
          </Col>
          <Col xs={ 6 } sm={ 6 }>
            <ListGroup>
              <li className="list-group-item"><strong>Duration: </strong>&nbsp;{ (parseInt(this.state.boxL) * (catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdL].SER_DURATION)) } Days</li>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <h4 style={{ marginTop: '20px' }} className="page-header">Prescription Details</h4>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <Panel header="Right Eye">
            <p><strong>BRAND: </strong>&nbsp;<span className="pull-right">{ doc && doc.contactBrandRight }</span></p>
            <p><strong>PWR: </strong>&nbsp;<span className="pull-right">{ doc && doc.powerRight }</span></p>
            { doc.cylinderRight === '0' ? '' : <p><strong>CYL: </strong>&nbsp;<span className="pull-right">{ doc && doc.cylinderRight }</span></p> }
            { doc.axisRight === '0' ? '' : <p><strong>AXIS: </strong>&nbsp;<span className="pull-right">{ doc && doc.axisRight }</span></p> }
            { doc.addPowerRight === '0' ? '' : <p><strong>PWR+: </strong>&nbsp;<span className="pull-right">{ doc && doc.addPowerRight }</span></p> }
            <p><strong>BC: </strong>&nbsp;<span className="pull-right">{ doc && doc.baseCurveRight }</span></p>
            <p><strong>DIA: </strong>&nbsp;<span className="pull-right">{ doc && doc.diameterRight }</span></p>
          </Panel>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <Panel header="Left Eye">
            <p><strong>BRAND: </strong>&nbsp;<span className="pull-right">{ doc && doc.contactBrandLeft }</span></p>
            <p><strong>PWR: </strong>&nbsp;<span className="pull-right">{ doc && doc.powerLeft }</span></p>
            { doc.cylinderLeft === '0' ? '' : <p><strong>CYL: </strong>&nbsp;<span className="pull-right">{ doc && doc.cylinderLeft }</span></p> }
            { doc.axisLeft === '0' ? '' : <p><strong>AXIS: </strong>&nbsp;<span className="pull-right">{ doc && doc.axisLeft }</span></p> }
            { doc.addPowerLeft === '0' ? '' : <p><strong>PWR+: </strong>&nbsp;<span className="pull-right">{ doc && doc.addPowerLeft }</span></p> }
            <p><strong>BC: </strong>&nbsp;<span className="pull-right">{ doc && doc.baseCurveLeft }</span></p>
            <p><strong>DIA: </strong>&nbsp;<span className="pull-right">{ doc && doc.diameterLeft }</span></p>
          </Panel>
        </Col>
      </Row>
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
      <h4 className="page-header" style={{ marginTop: '15px' }}>Enter Credit Card</h4>
      <Row style={{ marginTop: '15px' }}>
        <Col xs={ 12 }>
          <ControlLabel>Would you like to use your insurance for this purchase?</ControlLabel>
          <FormGroup>
            <Checkbox
              name="insurance"
              value={ true }
              checked={ this.state.insurance === true }
              onChange={() => { this.setState({ insurance: true }); }}
              inline
            >
              Yes
            </Checkbox>
            {' '}
            <Checkbox
              name="insurance"
              value={ false }
              checked={ this.state.insurance === false }
              onChange={() => { this.setState({ insurance: false }); }}
              inline
            >
              No
            </Checkbox>
          </FormGroup>
        </Col>
      </Row>
      <div className="CardForm">
        <label className="Label SecureStripe"><i className="fa fa-lock" /> Payments securely processed by Stripe</label>
        <Card ref={card => (this.card = card)} />
      </div>
      {!this.state.processing ? <Button type="submit" bsStyle="success" block>Place Order</Button> : <Loading />}
    </form>);
  }
}

PatientOrderForm.propTypes = {
  doc: PropTypes.object,
  catalog: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('catalog');
  if (subscription.ready()) {
    const catalog = Catalog.find().fetch();
    onData(null, { catalog });
  }
};

export default composeWithTracker(composer)(PatientOrderForm);
