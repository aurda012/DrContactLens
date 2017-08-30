import React from 'react';

import './Public.scss';

const Registration = ({ children }) => (
  <div className="blue-signup">
    { children }
  </div>
);

Registration.propTypes = {
  children: React.PropTypes.node,
};

export default Registration;
