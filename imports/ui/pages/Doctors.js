import React from 'react';
import DoctorsTable from '../components/Tables/DoctorsTable';

const AdminPatients = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Doctors</strong></h4>
          </div>
          <div className="card-block">
            <DoctorsTable style={{ margin: '0' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminPatients;
