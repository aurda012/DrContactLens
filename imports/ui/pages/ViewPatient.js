import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Patients from '../../api/patients/patients';
import { removePatient } from '../../api/patients/methods';
import NotFound from './NotFound';

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
              <i className="fa fa-align-justify"></i> { `${ doc.firstName } ${ doc.lastName }` }
            </div>
            <div className="card-block">
              <h4 className="page-header">Patient Profile</h4>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>First Name: { doc && doc.firstName }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Last Name: { doc && doc.lastName }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Email: { doc && doc.emailAddress }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Patient Status: { doc && doc.patientStatus }</h6>
                </Col>
              </Row>
              <h4 className="page-header">Prescription Details</h4>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                 <h6>Contact Brand: { doc && doc.contactBrand }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Right Eye - Power: { doc && doc.powerRight }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Left Eye - Power: { doc && doc.powerLeft }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Right Eye - Cylinder: { doc && doc.cylinderRight }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Left Eye - Cylinder: { doc && doc.cylinderLeft }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Right Eye - Axis: { doc && doc.axisRight }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Left Eye - Axis: { doc && doc.axisLeft }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Right Eye - Add Power: { doc && doc.addPowerRight }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Left Eye - Add Power: { doc && doc.addPowerLeft }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Right Eye - Base Curve: { doc && doc.baseCurveRight }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Left Eye - Base Curve: { doc && doc.baseCurveLeft }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Right Eye - Diameter: { doc && doc.diameterRight }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Left Eye - Diameter: { doc && doc.diameterLeft }</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Last Exam: { doc && doc.lastExam }</h6>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <h6>Expiration Date: { doc && doc.prescriptionExpiration }</h6>
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
  ) : <NotFound />;
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
