import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Orders extends Component {
  render() {
    const { patients } = this.props;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 style={{ margin: '5px' }}><strong>Orders</strong></h4>
              </div>
              <div className="card-block">
                <BootstrapTable
                  data={ patients }
                  striped
                  hover
                  condensed
                  pagination
                  responsive
                  search>
                  <TableHeaderColumn dataField='firstName' dataSort>Order Date</TableHeaderColumn>
                  <TableHeaderColumn dataField='lastName' dataSort>Patient Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='lastName' dataSort>Doctor Name</TableHeaderColumn>
                  <TableHeaderColumn isKey dataField='emailAddress' dataSort>Brand</TableHeaderColumn>
                  <TableHeaderColumn dataField='lastExam' dataSort>Quantity</TableHeaderColumn>
                  <TableHeaderColumn dataField='prescriptionExpiration' dataSort>Total</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Orders.propTypes = {
  patients: PropTypes.array,
};

export default Orders;
