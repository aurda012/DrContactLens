import React from 'react';
import PopularBrandsTable from '../components/Tables/PopularBrandsTable';

const PopularBrands = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Popular Brands</strong></h4>
          </div>
          <div className="card-block">
            <PopularBrandsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PopularBrands;
