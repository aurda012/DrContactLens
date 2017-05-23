import React from 'react';
import DiscountEditor from '../components/DiscountEditor.js';

const NewDiscount = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <h4 className="page-header">New Discount</h4>
            <DiscountEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewDiscount;
