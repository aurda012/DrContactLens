import React from 'react';
import SimpleFooter from '../../components/Footers/SimpleFooter';

import './Public.scss';

const LoginLayout = ({ children }) => (
  <div className="blue-login">
    <div className="container">
      { children }
      <SimpleFooter />
    </div>
  </div>
);

LoginLayout.propTypes = {
  children: React.PropTypes.node,
};

export default LoginLayout;
