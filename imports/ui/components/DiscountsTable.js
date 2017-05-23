/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Discounts from '../../api/discounts/discounts';

class DiscountsTable extends Component {
  render() {
    const { discounts } = this.props;
    return (
      <table className="table table-bordered table-striped table-condensed">
        <thead>
        <tr>
          <th>Discount Code</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Discount Amount</th>
          <th>Minimum Spend</th>
          <th>Discount Type</th>
          <th>Uses</th>
          <th>Manage</th>
        </tr>
        </thead>
        <tbody>
        {discounts.map(({ _id,
                          discountCode,
                          startDate,
                          endDate,
                          discountAmount,
                          minimumSpend,
                          discountType,
                          uses }) => {
          return (
            <tr key={_id}>
              <td>{ discountCode }</td>
              <td>{ startDate }</td>
              <td>{ endDate }</td>
              <td>{ discountAmount }</td>
              <td>{ minimumSpend }</td>
              <td>{ discountType }</td>
              <td>{ uses }</td>
              <td><Link to={`/admin/discounts/${_id}`}>
                <Button
                  bsStyle="info"
                >View</Button>
              </Link></td>
            </tr>
          );
        })}
        </tbody>
      </table>
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
