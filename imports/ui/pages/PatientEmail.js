/* eslint-disable max-len */
import React from 'react';
import { Row, Col, Alert, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import handlePatientEmail from '../../modules/patient-email';
import Loading from '../components/Loading/Loading';

export default class PatientEmail extends React.Component {
  constructor() {
    super();
    this.state = { processing: false };
    this.setProcessingState = this.setProcessingState.bind(this);
  }

  setProcessingState(state) {
    this.setState(state);
  }

  componentDidMount() {
    handlePatientEmail({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="z-depth-2">
        <Row>
          <Col
            xs={10}
            sm={ 8 }
            smOffset={3}
            md={ 6 }
            mdOffset={4}
            lg={4}
            lgOffset={4}
            className="portal-login text-center"
          >
            <div className="login-app-title">
              <img src={'img/loginlogo.png'} height="107" width="150" alt="logo" />
            </div>
            <div style={{ width: '90%', marginLeft: '5%' }}>
              <Alert bsStyle="info">
                Enter your email address that is currently on file with your prescribing doctor. You will be sent a verification link to place your order with one-click checkout.
              </Alert>
              <form
                ref={ form => (this.patientEmailForm = form) }
                onSubmit={ this.handleSubmit }
              >
                <FormGroup>
                  <input
                    type="email"
                    ref={emailAddress => (this.emailAddress = emailAddress)}
                    name="emailAddress"
                    placeholder="Email Address"
                    className="form-control"
                  />
                </FormGroup>
                {!this.state.processing ? <Button type="submit" bsStyle="success" block>Send Email</Button> : <Loading />}
              </form>
              <div className="back-to-login">
                Forgot Email? <Link to="/recover-email">Click Here</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
