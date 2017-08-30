/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Patients from '../../../api/patients/patients';

class PatientsTable extends Component {
  render() {
    const { patients } = this.props;
    return (
      <BootstrapTable
        data={ patients }
        striped
        hover
        condensed
        pagination
        responsive
        search>
        <TableHeaderColumn dataField='firstName' dataSort>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='emailAddress' dataSort>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='lastExam' dataSort>Last Exam</TableHeaderColumn>
        <TableHeaderColumn dataField='prescriptionExpiration' dataSort>Prescription Exp.</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

PatientsTable.propTypes = {
  patients: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('patients.list');
  if (subscription.ready()) {
    const patients = Patients.find().fetch();
    onData(null, { patients });
  }
};

export default composeWithTracker(composer)(PatientsTable);
