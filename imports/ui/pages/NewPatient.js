import React from 'react';
import PatientEditor from '../components/PatientEditor.js';

const NewPatient = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <h4 className="page-header">New Patient</h4>
            <PatientEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewPatient;
