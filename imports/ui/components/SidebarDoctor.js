import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

class SidebarDoctor extends Component {
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }


  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={'img/avatars/8.jpg'} className="img-avatar" alt="Avatar"/>
          <div className="text-muted">Welcome,</div>
          <div><strong>{ userName() }</strong></div>

          <div className="btn-group" role="group" aria-label="Button group WITH nested dropdown">
            <button type="button" className="btn btn-link">
              <i className="icon-settings"></i>
            </button>
            <button type="button" className="btn btn-link">
              <i className="icon-speech"></i>
            </button>
            <button type="button" className="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="icon-user"></i>
            </button>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/patients'} className="nav-link" activeClassName="active"><i className="icon-people"></i> Patients </Link>
            </li>
            <li className="nav-item">
              <Link to={'/patient-orders'} className="nav-link" activeClassName="active"><i className="icon-social-dropbox"></i> Orders </Link>
            </li>
            <li className="nav-item">
              <Link to={'/doctor-sales-reports'} className="nav-link" activeClassName="active"><i className="icon-chart"></i> Sales Reports </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SidebarDoctor;
