/* eslint-disable max-len */
import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button, Alert, Checkbox } from 'react-bootstrap';
import VirtualizedSelect from 'react-virtualized-select';
import Plans from '../components/Plans/Plans';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';

import handleSignup from '../../modules/doctor-signup';

const STATES = require('../../api/data/states');

class DoctorRegistration extends React.Component {
  constructor() {
    super();
    this.state = { processing: false };
    this.setProcessingState = this.setProcessingState.bind(this);
  }

  setProcessingState(state) {
    this.setState(state);
  }

  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const options = STATES.US;
    return (
      <div className="Signup">
        <Row>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} className="Registration">
            <h4 className="page-header" style={{ marginTop: '0' }}>Doctor Profile</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <input
                      type="text"
                      ref={firstName => (this.firstName = firstName)}
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <input
                      type="text"
                      ref={lastName => (this.lastName = lastName)}
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Email Address</ControlLabel>
                    <input
                      type="email"
                      ref={emailAddress => (this.emailAddress = emailAddress)}
                      name="emailAddress"
                      placeholder="Email Address"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <input
                      type="password"
                      ref={password => (this.password = password)}
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 3 } sm={ 3 }>
                  <FormGroup>
                    <ControlLabel>Date</ControlLabel>
                    <input
                      type="number"
                      ref={dobMonth => (this.dobMonth = dobMonth)}
                      name="dobMonth"
                      placeholder="MM"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 3 } sm={ 3 }>
                  <FormGroup>
                    <ControlLabel>Of</ControlLabel>
                    <input
                      type="number"
                      ref={dobDay => (this.dobDay = dobDay)}
                      name="dobDay"
                      placeholder="DD"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 4 } sm={ 4 }>
                  <FormGroup>
                    <ControlLabel>Birth</ControlLabel>
                    <input
                      type="number"
                      ref={dobYear => (this.dobYear = dobYear)}
                      name="dobYear"
                      placeholder="YYYY"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>SSN Last 4</ControlLabel>
                    <input
                      type="password"
                      ref={ssn => (this.ssn = ssn)}
                      name="ssn"
                      placeholder="SSN Last 4.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <h4 className="page-header" style={{ marginTop: '10px' }}>Practice Profile</h4>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Practice Name</ControlLabel>
                    <input
                      type="text"
                      ref={practiceName => (this.practiceName = practiceName)}
                      name="practiceName"
                      placeholder="Practice Name.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Phone Number</ControlLabel>
                    <input
                      type="text"
                      ref={practicePhone => (this.practicePhone = practicePhone)}
                      name="practicePhone"
                      placeholder="Phone Number.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Address</ControlLabel>
                    <input
                      type="text"
                      ref={practiceAddress => (this.practiceAddress = practiceAddress)}
                      name="practiceAddress"
                      placeholder="Address.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Address Line 2</ControlLabel>
                    <input
                      type="text"
                      ref={practiceAddress2 => (this.practiceAddress2 = practiceAddress2)}
                      name="practiceAddress2"
                      placeholder="Address Line 2.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>City</ControlLabel>
                    <input
                      type="text"
                      ref={practiceCity => (this.practiceCity = practiceCity)}
                      name="practiceCity"
                      placeholder="City.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>State</ControlLabel>
                    <VirtualizedSelect
                      name="stateAddress"
                      options={options}
                      ref={practiceState => (this.selectState = practiceState)}
                      onChange={selectState => this.setState({ selectState })}
                      value={this.state.selectState}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Zip</ControlLabel>
                    <input
                      type="text"
                      ref={practiceZip => (this.practiceZip = practiceZip)}
                      name="practiceZip"
                      placeholder="Zip.."
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <h4 className="page-header" style={{ marginTop: '10px' }}>Payment Information</h4>
              <Alert bsStyle="info">
                <strong>Please select your preferred plan size</strong>: The debit card used to sign up will connect directly to your bank account for orders. All orders placed by patients through Dr. Contact Lens will be disbursed and managed through this account.  Please make sure you are using a business debit card from your practice to place this order.
              </Alert>
              <Plans />
              <div className="CardForm">
                <label className="Label SecureStripe"><i className="fa fa-lock" /> Payments securely processed by Stripe</label>
                <Card ref={card => (this.card = card)} />
              </div>
              <Alert style={{ padding: '5px' }} bsStyle="info">
                <Checkbox style={{ textAlign: 'center' }}>I agree to the <a href="http://www.drcontactlens.com/terms-of-service.pdf" target="_blank" style={{ textDecoration: 'underline' }}>Terms of Service</a>.</Checkbox>
              </Alert>
              {!this.state.processing ? <Button type="submit" bsStyle="success" block>Sign Up</Button> : <Loading />}
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

DoctorRegistration.propTypes = {
  modal: React.PropTypes.object,
};

export default DoctorRegistration;
