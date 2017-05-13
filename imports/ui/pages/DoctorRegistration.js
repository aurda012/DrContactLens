import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import Plans from '../components/Plans';
import Card from '../components/Card';
import handleSignup from '../../modules/doctor-signup';

class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="z-depth-2">
        <Row>
          <Col xs={ 10 }
               xsOffset={1}
               sm={8}
               smOffset={2}
               md={8}
               mdOffset={2}
               lg={6}
               lgOffset={3}
               className="Relative folded-corner text-center"
          >
            <div className="login-app-title">
              <img src={'img/loginlogo.png'} height="107" width="150" alt="logo" />
            </div>
            <h4 className="page-header">Doctor Registration</h4>
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
                    <ControlLabel>Practice Name</ControlLabel>
                    <input
                      type="text"
                      ref={practiceName => (this.practiceName = practiceName)}
                      name="practiceName"
                      placeholder="Practice Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Practice Phone Number</ControlLabel>
                    <input
                      type="text"
                      ref={practicePhone => (this.practicePhone = practicePhone)}
                      name="practicePhone"
                      placeholder="Practice Phone Number"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Practice Address</ControlLabel>
                    <input
                      type="text"
                      ref={practiceStreet => (this.practiceStreet = practiceStreet)}
                      name="practiceStreet"
                      placeholder="Practice Address"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Practice City</ControlLabel>
                    <input
                      type="text"
                      ref={practiceCity => (this.practiceCity = practiceCity)}
                      name="practiceCity"
                      placeholder="Practice City"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Practice State</ControlLabel>
                    <input
                      type="text"
                      ref={practiceState => (this.practiceState = practiceState)}
                      name="practiceState"
                      placeholder="Practice State"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Practice Zip</ControlLabel>
                    <input
                      type="text"
                      ref={practiceZip => (this.practiceZip = practiceZip)}
                      name="practiceZip"
                      placeholder="Practice Zip"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <h4 className="page-header">Account Credentials</h4>
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
              <h4 className="page-header">Payment Information</h4>
              <Row>
                <Col xs={ 12 }>
                  <Alert bsStyle="info">
                    <strong>Select a plan size</strong>. When you sign up, your subscription will begin after a free one day trial (renewed monthly). Cancel anytime.
                  </Alert>
                  <Plans />
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 }>
                  <Card ref={ card => (this.card = card) } />
                </Col>
              </Row>
              <Button type="submit" bsStyle="success" block>Sign Up</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Signup;
