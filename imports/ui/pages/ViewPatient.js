/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { removePatient } from '../../api/patients/methods';
import Patients from '../../api/patients/patients';

const handleEdit = (_id) => {
  browserHistory.push(`/doctor/patients/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removePatient.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Patient deleted!', 'success');
        browserHistory.push('/doctor/patients');
      }
    });
  }
};

const ViewPatient = ({ doc }) => {
  return doc ? (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 style={{ margin: '5px' }}><strong>{ `${doc.firstName} ${doc.lastName}` }</strong></h4>
            </div>
            <div className="card-block">
              <h5 className="page-header">Patient Profile</h5>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>First Name: </strong>&nbsp;{ doc && doc.firstName }</li>
                    <li className="list-group-item"><strong>Email: </strong>&nbsp;{ doc && doc.emailAddress }</li>
                    <li className="list-group-item"><strong>Date Of Birth: </strong>&nbsp;{ (doc && doc.dateOfBirth).toString() }</li>
                    <li className="list-group-item"><strong>Insurance Company: </strong>&nbsp;{ doc && doc.insuranceCompany }</li>
                  </ul>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Last Name: </strong>&nbsp;{ doc && doc.lastName }</li>
                    <li className="list-group-item"><strong>Phone Number: </strong>&nbsp;{ doc && doc.phoneNumber }</li>
                    <li className="list-group-item"><strong>Insurance Member ID: </strong>&nbsp;{ doc && doc.insuranceId }</li>
                  </ul>
                </Col>
              </Row>
              <h5 className="page-header">Patient Address</h5>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Street: </strong>&nbsp;{ doc && doc.streetAddress }</li>
                    <li className="list-group-item"><strong>City: </strong>&nbsp;{ doc && doc.cityAddress }</li>
                  </ul>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>State: </strong>&nbsp;{ doc && doc.stateAddress }</li>
                    <li className="list-group-item"><strong>Zip Code: </strong>&nbsp;{ doc && doc.zipAddress }</li>
                  </ul>
                </Col>
              </Row>
              <h5 className="page-header">Prescription Details</h5>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Contact Brand - Right: </strong>&nbsp;{ doc && doc.contactBrandRight }</li>
                    <li className="list-group-item"><strong>Right Eye - Power: </strong>&nbsp;{ doc && doc.powerRight }</li>
                    <li className="list-group-item"><strong>Right Eye - Cylinder: </strong>&nbsp;{ doc && doc.cylinderRight }</li>
                    <li className="list-group-item"><strong>Right Eye - Axis: </strong>&nbsp;{ doc && doc.axisRight }</li>
                    <li className="list-group-item"><strong>Right Eye - Add Power: </strong>&nbsp;{ doc && doc.addPowerRight }</li>
                    <li className="list-group-item"><strong>Right Eye - Base Curve: </strong>&nbsp;{ doc && doc.baseCurveRight }</li>
                    <li className="list-group-item"><strong>Right Eye - Diameter: </strong>&nbsp;{ doc && doc.diameterRight }</li>
                    <li className="list-group-item"><strong>Last Exam: </strong>&nbsp;{ (doc && doc.lastExam).toString() }</li>
                  </ul>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Contact Brand - Left: </strong>&nbsp;{ doc && doc.contactBrandLeft }</li>
                    <li className="list-group-item"><strong>Left Eye - Power: </strong>&nbsp;{ doc && doc.powerLeft }</li>
                    <li className="list-group-item"><strong>Left Eye - Cylinder: </strong>&nbsp;{ doc && doc.cylinderLeft }</li>
                    <li className="list-group-item"><strong>Left Eye - Axis: </strong>&nbsp;{ doc && doc.axisLeft }</li>
                    <li className="list-group-item"><strong>Left Eye - Add Power: </strong>&nbsp;{ doc && doc.addPowerLeft }</li>
                    <li className="list-group-item"><strong>Left Eye - Base Curve: </strong>&nbsp;{ doc && doc.baseCurveLeft }</li>
                    <li className="list-group-item"><strong>Left Eye - Diameter: </strong>&nbsp;{ doc && doc.diameterLeft }</li>
                    <li className="list-group-item"><strong>Expiration Date: </strong>&nbsp;{ (doc && doc.prescriptionExpiration).toString() }</li>
                  </ul>
                </Col>
              </Row>
              <ButtonGroup className="pull-right" bsSize="medium">
                <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
                <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <Alert bsStyle="warning">We couldn't find that patient!</Alert>;
};

ViewPatient.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const patientId = props.params._id;
  const subscription = Meteor.subscribe('patients.view', patientId);

  if (subscription.ready()) {
    const doc = Patients.findOne(patientId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(ViewPatient);
