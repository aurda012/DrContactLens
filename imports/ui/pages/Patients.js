import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const patients = [{
  firstName: 'john',
  lastName: 'doe',
  emailAddress: 'john.doe@example.com',
  lastExam: 9-15-2016,
  prescriptionExpiration: 9-15-2017,
  patientStatus: true,
}];


class PatientsTable extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Patients
              </div>
              <div className="card-block">
                <BootstrapTable
                  data={ patients }
                  pagination={ true }
                  multiColumnSort={ 2 }
                  search={ true }>
                  <TableHeaderColumn dataField='firstName' isKey>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='lastName'>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='emailAdress'>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='lastExam'>Product Price</TableHeaderColumn>
                  <TableHeaderColumn dataField='prescriptionExpiration'>Product Price</TableHeaderColumn>
                  <TableHeaderColumn dataField='patientStatus'>Product Price</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientsTable;

