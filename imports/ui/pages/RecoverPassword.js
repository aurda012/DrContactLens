import React from 'react';
import { Row, Col, Alert, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import handleRecoverPassword from '../../modules/recover-password';

export default class RecoverPassword extends React.Component {
  componentDidMount() {
    handleRecoverPassword({ component: this });
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
                Enter your email address below to receive a link to reset your password.
              </Alert>
              <form
                ref={ form => (this.recoverPasswordForm = form) }
                className="recover-password"
                onSubmit={ this.handleSubmit }
              >
                <FormGroup>
                  <FormControl
                    type="email"
                    ref="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address"
                  />
                </FormGroup>
                <Button type="submit" bsStyle="success">Recover Password</Button>
              </form>
              <div className="back-to-login">
                <Link to="/login">Back to Login </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
