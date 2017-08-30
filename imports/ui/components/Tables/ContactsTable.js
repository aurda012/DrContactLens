/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Catalog from '../../../api/catalog/catalog';

const options = {
  onRowClick(catalog) {
    browserHistory.push(`/admin/contacts/${catalog._id}`);
  },
};

class ContactsTable extends Component {
  render() {
    const { catalog } = this.props;
    return (
      <BootstrapTable
        data={ catalog }
        options={ options }
        striped
        hover
        condensed
        pagination
        search>
        <TableHeaderColumn dataField='MAN_NAME' dataSort>Manufacturer</TableHeaderColumn>
        <TableHeaderColumn dataField='SER_NAME' dataSort>Brand Name</TableHeaderColumn>
        <TableHeaderColumn dataField='SER_RETAIL' dataSort>Retail Price</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='SER_WHOLESALE' dataSort>Wholesale Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

ContactsTable.propTypes = {
  catalog: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('catalog');
  if (subscription.ready()) {
    const catalog = Catalog.find().fetch();
    onData(null, { catalog });
  }
};

export default composeWithTracker(composer)(ContactsTable);
