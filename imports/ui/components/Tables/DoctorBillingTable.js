/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class DoctorBillingTable extends Component {
  render() {
    const { catalog } = this.props;
    return (
      <BootstrapTable
        data={ catalog }
        striped
        hover
        condensed
        pagination
        search>
        <TableHeaderColumn dataField='MAN_NAME' dataSort>Charge Date</TableHeaderColumn>
        <TableHeaderColumn dataField='SER_NAME' dataSort>Description</TableHeaderColumn>
        <TableHeaderColumn dataField='SER_RETAIL' dataSort>Card Used</TableHeaderColumn>
        <TableHeaderColumn dataField='SER_WHOLESALE' dataSort>Amount Charged</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='SER_WHOLESALE' dataSort>Status</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

DoctorBillingTable.propTypes = {
  catalog: PropTypes.array,
};

export default DoctorBillingTable;
