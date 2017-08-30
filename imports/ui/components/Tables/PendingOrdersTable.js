import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import PendingOrders from '../../../api/pending-orders/pending-orders';

const options = (modal) => ({
  onRowClick(pendingOrder) {
    modal.open('acceptTerms', { orderId: pendingOrder._id });
  },
});

class PendingOrdersTable extends Component {
  render() {
    const { orders, modal } = this.props;
    const button = (<Button
      bsStyle="success"
      onClick={() => { modal.open('acceptTerms'); }}
    >Approve</Button>);
    return (
      <BootstrapTable
        data={ orders }
        options={options(modal)}
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
        <TableHeaderColumn dataField={button} dataSort>Total</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

PendingOrdersTable.propTypes = {
  orders: PropTypes.array,
  modal: PropTypes.object,
};

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('pending-orders');
  if (subscription.ready()) {
    const orders = PendingOrders.find({ doctorId: Meteor.userId() }).fetch();
    onData(null, { orders });
  }
};

export default composeWithTracker(composer)(PendingOrdersTable);
