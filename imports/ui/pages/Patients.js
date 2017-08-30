import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import PatientsTable from '../components/Tables/PatientsTableDoctor';

const Patients = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Patients</strong></h4>
          </div>
          <div className="card-block">
            <Link to={'/doctor/patients/new'} >
              <Button
                bsStyle="success"
                className="pull-right"
                style={{ margin: '0' }}
              >New Patient</Button>
            </Link>
            <PatientsTable style={{ margin: '0' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Patients;
