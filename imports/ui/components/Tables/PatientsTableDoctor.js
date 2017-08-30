/* eslint-disable no-plusplus,no-const-assign,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { browserHistory } from 'react-router';
import Patients from '../../../api/patients/patients';
import { monthDayYearSlashed } from '../../../modules/dates';

const options = {
  onRowClick(patients) {
    browserHistory.push(`/doctor/patients/${patients._id}`);
  },
};


class PatientsTable extends Component {
  render() {
    const { patients } = this.props;
    return (
      <BootstrapTable
        data={ patients }
        options={ options }
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

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('patients.list');
  if (subscription.ready()) {
    const patients = _.map(Patients.find({ owner: Meteor.userId() }).fetch(), (patient) => {
      patient.lastExam = monthDayYearSlashed(patient.lastExam);
      patient.prescriptionExpiration = monthDayYearSlashed(patient.prescriptionExpiration);
      return patient;
    });
    onData(null, { patients });
  }
};

export default composeWithTracker(composer)(PatientsTable);
