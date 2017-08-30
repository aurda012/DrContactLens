/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class DoctorsTable extends Component {
  render() {
    const { users } = this.props;
    const doctors = users.map((element, i) => {
      return {
        firstName: element.profile.name.first,
        lastName: element.profile.name.last,
        emailAddress: element.emails[0].address,
        practiceName: element.profile.practiceName,
        practicePhone: element.profile.practicePhone }
    });

    return (
      <BootstrapTable
        data={ doctors }
        striped
        hover
        condensed
        pagination
        responsive
        search>
        <TableHeaderColumn dataField='firstName' dataSort>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='emailAddress' dataSort>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='practiceName' dataSort>Practice</TableHeaderColumn>
        <TableHeaderColumn dataField='practicePhone' dataSort>Number</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

DoctorsTable.propTypes = {
  users: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('users');
  if (subscription.ready()) {
    const users = Meteor.users.find({ roles: 'doctor' }).fetch();
    onData(null, { users });
  }
};

export default composeWithTracker(composer)(DoctorsTable);
