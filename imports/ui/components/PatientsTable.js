/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Patients from '../../api/patients/patients';

class PatientsTable extends Component {
  render() {
    const { patients } = this.props;
    return (
      <table className="table table-bordered table-striped table-condensed">
        <thead>
        <tr>
          <th>Patient Name</th>
          <th>Email</th>
          <th>Last Exam</th>
          <th>Expiration</th>
          <th>Registered</th>
          <th>Manage</th>
        </tr>
        </thead>
        <tbody>
        {patients.map(({ _id,
                         firstName,
                         lastName,
                         emailAddress,
                         lastExam,
                         prescriptionExpiration,
                         patientStatus }) => {
          return (
            <tr key={_id}>
              <td>{ `${firstName} ${lastName}` }</td>
              <td>{ emailAddress }</td>
              <td>{ lastExam }</td>
              <td>{ prescriptionExpiration }</td>
              <td><span className="badge badge-info">{ patientStatus }</span></td>
              <td><Link to={`/doctor/patients/${_id}`}>
                <Button
                  bsStyle="info"
                >View</Button>
              </Link></td>
            </tr>
          );
        })}
        </tbody>
      </table>
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
