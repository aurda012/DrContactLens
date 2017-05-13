import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleResetPassword from '../../modules/reset-password';

export default class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({ component: this, token: this.props.params.token });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="z-depth-2">
        <Row>
          <Col xs={10}
               xsOffset={1}
               sm={ 8 }
               smOffset={2}
               md={ 6 }
               mdOffset={3}
               lg={4}
               lgOffset={4}
               className="portal-login text-center"
          >
            <div className="login-app-title">
              <img src={'img/loginlogo.png'} height="107" width="150" alt="logo" />
            </div>
            <h4 className="page-header">Reset Password</h4>
            <Alert bsStyle="info">
              To reset your password, enter a new one below. You will be logged in
    with your new password.
            </Alert>
            <form
              ref={ form => (this.resetPasswordForm = form) }
              className="reset-password"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <ControlLabel>New Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Repeat New Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="repeatNewPassword"
                  name="repeatNewPassword"
                  placeholder="Repeat New Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Reset Password &amp; Login</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  params: PropTypes.object,
};
