/* eslint-disable no-plusplus,no-const-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Contacts from '../../api/contacts/contacts';

class ContactsTable extends Component {
  render() {
    const { contacts } = this.props;
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
          {contacts.map(({ _id, manufacturer, brandName, retailPrice, wholesalePrice }) => {
            return (
              <tr key={_id}>
                <td>{ manufacturer }</td>
                <td>{ brandName }</td>
                <td>{ retailPrice }</td>
                <td>{ wholesalePrice }</td>
                <td><Link to={`/admin/contacts/${_id}`}>
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

ContactsTable.propTypes = {
  contacts: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('contacts');
  if (subscription.ready()) {
    const contacts = Contacts.find().fetch();
    onData(null, { contacts });
  }
};

export default composeWithTracker(composer)(ContactsTable);
