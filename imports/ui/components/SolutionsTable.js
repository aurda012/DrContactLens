/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Solutions from '../../api/solutions/solutions';

class SolutionsTable extends Component {
  render() {
    const { solutions } = this.props;
    return (
      <table className="table table-bordered table-striped table-condensed">
        <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Brand Name</th>
          <th>Retail Price</th>
          <th>Wholesale Price</th>
          <th>Manage</th>
        </tr>
        </thead>
        <tbody>
        {solutions.map(({ _id, manufacturer, brandName, retailPrice, wholesalePrice }) => {
          return (
            <tr key={_id}>
              <td>{ manufacturer }</td>
              <td>{ brandName }</td>
              <td>{ retailPrice }</td>
              <td>{ wholesalePrice }</td>
              <td><Link to={`/admin/solutions/${_id}`}>
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
