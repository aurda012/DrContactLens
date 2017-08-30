/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <Row>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3} lg={4} lgOffset={4} className="portal-login">
            <div className="login-app-title">
              <img src={'img/loginlogo.png'} height="107" width="150" alt="logo" />
            </div>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <div style={{ width: '90%', marginLeft: '5%' }}>
                <FormGroup>
                  <ControlLabel className="pull-left">Email</ControlLabel>
                  <FormControl
                    type="email"
                    ref="emailAddress"
                    name="emailAddress"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel className="pull-left">
                    <span className="pull-left">Password</span>
                  </ControlLabel>
                  <FormControl
                    type="password"
                    ref="password"
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <div className="forgot-password">
                  <Link to="/recover-password">Forgot Password?</Link>
                </div>
                <Button type="submit" bsStyle="success">Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
