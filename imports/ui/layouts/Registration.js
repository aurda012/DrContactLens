import React, { Component } from 'react';

class Registration extends Component {
  render() {
    return (
      <div className="blue-signup">
        {this.props.children}
      </div>
    );
  }
}

export default Registration;
