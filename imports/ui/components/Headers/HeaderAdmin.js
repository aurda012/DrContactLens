/* eslint-disable max-len */
import React, { Component } from 'react';
import { Roles } from 'meteor/alanning:roles';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import NotificationsCollection from '../../../api/notifications/notifications';


const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
    return `${name.first} ${name.last}`;
  } else if (Roles.userIsInRole(Meteor.userId(), 'doctor')) {
    return `Dr. ${name.last}`;
  }
  return '';
};

class AdminHeader extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.state = {
      dropdownOpen: false,
      notificationsOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleNotifications() {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  static sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  static mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  render() {
    const { notifications } = this.props;
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up"
                onClick={AdminHeader.mobileSidebarToggle}
                type="button"
        >
          &#9776;
        </button>
        <a className="navbar-brand" href="#" />
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler"
               onClick={AdminHeader.sidebarToggle}
               href="#"
            >
              <h5>&#9776;</h5>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Dropdown isOpen={this.state.notificationsOpen} toggle={this.toggle}>
              <a onClick={this.toggleNotifications}
                 className="nav-link dropdown-toggle nav-link"
                 data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded={this.state.notificationsOpen}
              >
                <i className="fa fa-bell" />
              </a>

              <DropdownMenu className="dropdown-menu-left" style={{ left: '-18vh' }}>
                <DropdownItem header className="text-center"><strong>Notifications</strong></DropdownItem>
                {notifications.map(({ message, type }) => {
                  return (<DropdownItem>{type === 'doctor' ? <i className="fa fa-user-md" /> : <i className="fa fa-star" /> } { message }</DropdownItem>);
                })}
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle}
                 className="nav-link dropdown-toggle nav-link"
                 data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded={this.state.dropdownOpen}
              >
                <span>{ userName() }</span>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <Link to={'/admin/profile'}>
                  <DropdownItem>
                    <i className="fa fa-user" /> Profile
                  </DropdownItem>
                </Link>
                <Link onClick={ handleLogout }>
                  <DropdownItem>
                    <i className="fa fa-lock" /> Logout
                  </DropdownItem>
                </Link>

              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </header>
    );
  }
}

AdminHeader.propTypes = {
  notifications: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('notifications');
  if (subscription.ready()) {
    const notifications = NotificationsCollection.find().fetch();
    console.log(notifications);
    onData(null, { notifications });
  }
};

export default composeWithTracker(composer)(AdminHeader);
