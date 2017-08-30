import React from 'react';
import DoctorSalesTable from '../components/Tables/DoctorSalesTable';

const DoctorSales = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Doctor Sales</strong></h4>
          </div>
          <div className="card-block">
            <DoctorSalesTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DoctorSales;
