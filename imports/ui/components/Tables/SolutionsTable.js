/* eslint-disable no-plusplus,no-const-assign,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Solutions from '../../../api/solutions/solutions';

const options = {
  onRowClick(solutions) {
    browserHistory.push(`/admin/solutions/${solutions._id}`);
  },
};

class SolutionsTable extends Component {
  render() {
    const { solutions } = this.props;
    return (
      <BootstrapTable
        data={ solutions }
        options={ options }
        striped
        hover
        condensed
        pagination
        search>
        <TableHeaderColumn dataField='manufacturer' dataSort>Manufacturer</TableHeaderColumn>
        <TableHeaderColumn dataField='brandName' dataSort>Brand Name</TableHeaderColumn>
        <TableHeaderColumn dataField='retailPrice' dataSort>Retail Price</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='wholesalePrice' dataSort>Wholesale Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

SolutionsTable.propTypes = {
  solutions: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('solutions');
  if (subscription.ready()) {
    const solutions = Solutions.find().fetch();
    onData(null, { solutions });
  }
};

export default composeWithTracker(composer)(SolutionsTable);
