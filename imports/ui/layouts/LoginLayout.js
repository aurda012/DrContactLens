import React, { Component } from 'react';
import SimpleFooter from './../components/SimpleFooter';

class LoginLayout extends Component {
  render() {
    return (
      <div className="blue-login">
        {this.props.children}
        <SimpleFooter />
      </div>
    );
  }
}

export default LoginLayout;
