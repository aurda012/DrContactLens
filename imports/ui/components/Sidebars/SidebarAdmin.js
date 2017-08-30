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
          <div>Welcome,</div>
          <div><strong>{ userName() }</strong></div>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/admin/doctors'} className="nav-link" activeClassName="active"><i className="fa fa-user-md"></i> Doctors </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/patients'} className="nav-link" activeClassName="active"><i className="fa fa-users"></i> Patients </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/orders'} className="nav-link" activeClassName="active"><i className="fa fa-dropbox"></i> Orders </Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/contacts'} className="nav-link" activeClassName="active"><i className="fa fa-eye"></i> Contacts </Link>
            </li>
            {/*<li className="nav-item">*/}
              {/*<Link to={'/admin/discounts'} className="nav-link" activeClassName="active"><i className="fa fa-percent"></i> Discount Codes </Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
              {/*<Link to={'/admin/solutions'} className="nav-link" activeClassName="active"><i className="fa fa-tint"></i> Solutions </Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
              {/*<Link to={'/admin/popular-brands'} className="nav-link" activeClassName="active"><i className="fa fa-bolt"></i> Popular Brands </Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
              {/*<Link to={'/admin/doctor-sales'} className="nav-link" activeClassName="active"><i className="fa fa-line-chart"></i> Doctor Sales </Link>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link to={'/admin/sales-reports'} className="nav-link" activeClassName="active"><i className="fa fa-bar-chart"></i> Sales Reports </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
