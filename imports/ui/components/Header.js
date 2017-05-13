import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
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
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up"
                onClick={Header.mobileSidebarToggle}
                type="button"
        >
          &#9776;
        </button>
        <a className="navbar-brand" href="#" />
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler"
               onClick={Header.sidebarToggle}
               href="#"
            >
              <h5>&#9776;</h5>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="fa fa-cog" /></a>
          </li>
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#">
              <i className="fa fa-bell-o" />
              <span className="badge badge-pill badge-danger">5</span>
            </a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle}
                 className="nav-link dropdown-toggle nav-link"
                 data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded={this.state.dropdownOpen}
              >
                <span>John Doe</span><img src={'img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Account</strong></DropdownItem>

                <DropdownItem><i className="fa fa-user" /> Profile</DropdownItem>
                <DropdownItem>
                  <i className="fa fa-usd" /> Payments
                  <span className="badge badge-default">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-lock" /> Logout
                </DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
