import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `Dr. ${name.last}` : '';
};

class SidebarDoctor extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div>Welcome,</div>
          <div><strong>{ userName() }</strong></div>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/doctor/patients'} className="nav-link" activeClassName="active"><i className="fa fa-users"></i> Patients </Link>
            </li>
            <li className="nav-item">
              <Link to={'/doctor/pending-orders'} className="nav-link" activeClassName="active"><i className="fa fa-clock-o"></i> Pending Orders </Link>
            </li>
            <li className="nav-item">
              <Link to={'/doctor/orders'} className="nav-link" activeClassName="active"><i className="fa fa-dropbox"></i> Order History </Link>
            </li>
            <li className="nav-item">
              <Link to={'/doctor/sales-reports'} className="nav-link" activeClassName="active"><i className="fa fa-bar-chart"></i> Sales Reports </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SidebarDoctor;
