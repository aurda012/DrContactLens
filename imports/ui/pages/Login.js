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
      <div className="z-depth-2">
        <Row>
          <Col
            xs={10}
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
            <h4 className="page-header">Login</h4>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
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
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
