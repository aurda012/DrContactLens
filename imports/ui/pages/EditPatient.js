import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import PatientEditor from '../components/Editors/PatientEditor';
import Patients from '../../api/patients/patients';
import NotFound from './NotFound';

const EditPatient = ({ doc }) => (doc ? (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Editing "{ doc.firstName } { doc.lastName }"</strong></h4>
          </div>
          <div className="card-block">
            <PatientEditor doc={ doc } />
          </div>
        </div>
      </div>
    </div>
  </div>
) : <NotFound />);

EditPatient.propTypes = {
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

export default composeWithTracker(composer)(EditPatient);
