/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

class DoctorSalesTable extends Component {
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
        <TableHeaderColumn dataField='MAN_NAME' dataSort>Brand Name</TableHeaderColumn>
        <TableHeaderColumn dataField='SER_NAME' dataSort>Number of Orders</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='SER_RETAIL' dataSort>Sales Generated</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

DoctorSalesTable.propTypes = {
  catalog: PropTypes.array,
};

export default DoctorSalesTable;
