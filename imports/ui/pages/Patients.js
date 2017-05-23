import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import PatientsTable from '../components/PatientsTable';

const Patients = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> Patients
          </div>
          <div className="card-block">
            <Link to="/doctor/patients/new">
              <Button
                bsStyle="success"
                className="pull-right"
                style={{margin: '10px'}}
              >New Patient</Button>
            </Link>
            <PatientsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Patients;
