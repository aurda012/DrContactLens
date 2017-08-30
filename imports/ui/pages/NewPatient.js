import React from 'react';
import PatientEditor from '../components/Editors/PatientEditor.js';

const NewPatient = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>New Patient</strong></h4>
          </div>
          <div className="card-block">
            <PatientEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewPatient;
