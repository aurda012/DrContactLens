import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import DiscountsTable from '../components/Tables/DiscountsTable';

const Discounts = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Discounts</strong></h4>
          </div>
          <div className="card-block">
            <Link to="/admin/discounts/new">
              <Button
                bsStyle="success"
                className="pull-right"
                style={{ margin: '0' }}
              >New Discount</Button>
            </Link>
            <DiscountsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Discounts;
