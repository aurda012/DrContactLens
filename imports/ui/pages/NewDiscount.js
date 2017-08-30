import React from 'react';
import DiscountEditor from '../components/Editors/DiscountEditor.js';

const NewDiscount = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>New Discount</strong></h4>
          </div>
          <div className="card-block">
            <DiscountEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewDiscount;
