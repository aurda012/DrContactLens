import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

class Sidebar extends Component {
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
              <Link to={'/users'} className="nav-link" activeClassName="active"><i className="icon-people"></i> Users </Link>
            </li>
            <li className="nav-item">
              <Link to={'/orders'} className="nav-link" activeClassName="active"><i className="icon-social-dropbox"></i> Orders </Link>
            </li>
            <li className="nav-item">
              <Link to={'/insurance'} className="nav-link" activeClassName="active"><i className="icon-envelope-letter"></i> Insurance </Link>
            </li>
            <li className="nav-item">
              <Link to={'/discount-codes'} className="nav-link" activeClassName="active"><i className="icon-diamond"></i> Discount Codes </Link>
            </li>
            <li className="nav-item">
              <Link to={'/referral-credits'} className="nav-link" activeClassName="active"><i className="icon-user-follow"></i> Referral Credits </Link>
            </li>
            <li className="nav-item">
              <Link to={'/marketing-notifications'} className="nav-link" activeClassName="active"><i className="icon-bell"></i> Marketing Notifications </Link>
            </li>
            <li className="nav-item">
              <Link to={'/contact-lens-brands'} className="nav-link" activeClassName="active"><i className="icon-eye"></i> Contact Lens Brands </Link>
            </li>
            <li className="nav-item">
              <Link to={'/sales-reports'} className="nav-link" activeClassName="active"><i className="icon-chart"></i> Sales Reports </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
