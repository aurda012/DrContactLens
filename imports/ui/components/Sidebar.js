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
        </div>
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/admin/users'} className="nav-link" activeClassName="active"><i className="icon-people"></i> Users </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/orders'} className="nav-link" activeClassName="active"><i className="icon-social-dropbox"></i> Orders </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/contacts'} className="nav-link" activeClassName="active"><i className="icon-eye"></i> Contact Lens Brands </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/discounts'} className="nav-link" activeClassName="active"><i className="icon-diamond"></i> Discount Codes </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/solutions'} className="nav-link" activeClassName="active"><i className="icon-eye"></i> Contact Lens Solution </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/sales-reports'} className="nav-link" activeClassName="active"><i className="icon-chart"></i> Sales Reports </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
