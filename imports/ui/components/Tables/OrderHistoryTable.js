import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Orders from '../../../api/orders/orders';

class OrderHistoryTable extends Component {
  render() {
    const { orders } = this.props;
    return (
      <BootstrapTable
        data={ orders }
        striped
        hover
        condensed
        pagination
        responsive
        search>
        <TableHeaderColumn isKey dataField='createdAt' dataSort>Order Date</TableHeaderColumn>
        <TableHeaderColumn dataField='patientFirst' dataSort>Patient Name</TableHeaderColumn>
        <TableHeaderColumn dataField='brandRight' dataSort>Brand</TableHeaderColumn>
        <TableHeaderColumn dataField='quantityRight' dataSort>Quantity</TableHeaderColumn>
        <TableHeaderColumn dataField='orderTotal' dataSort>Total</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

OrderHistoryTable.propTypes = {
  orders: PropTypes.array,
};

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('orders');
  if (subscription.ready()) {
    const orders = Orders.find({ doctorId: Meteor.userId() }).fetch();
    onData(null, { orders });
  }
};

export default composeWithTracker(composer)(OrderHistoryTable);
