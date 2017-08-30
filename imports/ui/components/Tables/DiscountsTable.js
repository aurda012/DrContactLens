/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Discounts from '../../../api/discounts/discounts';

const options = {
  onRowClick(discounts) {
    browserHistory.push(`/admin/discounts/${discounts._id}`);
  },
};

class DiscountsTable extends Component {
  render() {
    const { discounts } = this.props;
    return (
      <BootstrapTable
        data={ discounts }
        options={ options }
        striped
        hover
        condensed
        pagination
        search>
        <TableHeaderColumn dataField='discountCode' dataSort>Discount Code</TableHeaderColumn>
        <TableHeaderColumn dataField='startDate' dataSort>Start Date</TableHeaderColumn>
        <TableHeaderColumn dataField='endDate' dataSort>End Date</TableHeaderColumn>
        <TableHeaderColumn dataField='discountAmount' dataSort>Discount Amount</TableHeaderColumn>
        <TableHeaderColumn dataField='minimumSpend' dataSort>Minimum Spend</TableHeaderColumn>
        <TableHeaderColumn dataField='discountType' dataSort>Discount Type</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='uses' dataSort>Uses</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

DiscountsTable.propTypes = {
  discounts: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('discounts.list');
  if (subscription.ready()) {
    const discounts = Discounts.find().fetch();
    onData(null, { discounts });
  }
};

export default composeWithTracker(composer)(DiscountsTable);
