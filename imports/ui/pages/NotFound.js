import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router';

const NotFound = () => (
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
        <h4 className="page-header">Page Not Found</h4>
        <Alert bsStyle="danger" className="error-top-margin">
          <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
        </Alert>
        <div className="back-to-login">
          <Link to="/login">Go Back</Link>
        </div>
      </Col>
    </Row>
  </div>
);

export default NotFound;
