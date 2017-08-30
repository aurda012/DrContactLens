import React from 'react';
import SolutionsTable from '../components/Tables/SolutionsTable';

const Solutions = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Lens Solutions</strong></h4>
          </div>
          <div className="card-block">
            <SolutionsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Solutions;
