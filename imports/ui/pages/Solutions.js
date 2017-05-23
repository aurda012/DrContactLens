import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import SolutionsTable from '../components/SolutionsTable';

const Solutions = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> Solutions
          </div>
          <div className="card-block">
            <Link to="/admin/solutions/new">
              <Button
                bsStyle="success"
                className="pull-right"
                style={{margin: '10px'}}
              >New Solution</Button>
            </Link>
            <SolutionsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Solutions;
