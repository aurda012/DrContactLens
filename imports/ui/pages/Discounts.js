import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import DiscountsTable from '../components/DiscountsTable';

const Discounts = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> Discounts
          </div>
          <div className="card-block">
            <Link to="/admin/discounts/new">
              <Button
                bsStyle="success"
                className="pull-right"
                style={{margin: '10px'}}
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
