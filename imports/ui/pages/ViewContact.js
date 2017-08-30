/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Catalog from '../../api/catalog/catalog';


const ViewContact = ({ doc }) => {
  return doc ? (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-offset-2 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 style={{ margin: '5px' }}><strong>{ doc.SER_NAME }</strong></h4>
            </div>
            <div className="card-block">
              <ul className="list-group">
                <li className="list-group-item"><strong>Brand Name: </strong>&nbsp;{ doc && doc.SER_NAME }</li>
                <li className="list-group-item"><strong>Manufacturer: </strong>&nbsp;{ doc && doc.MAN_NAME }</li>
                <li className="list-group-item"><strong>Retail Price: </strong>&nbsp;{ doc && doc.SER_RETAIL }</li>
                <li className="list-group-item"><strong>Wholesale Price: </strong>&nbsp;{ doc && doc.SER_WHOLESALE }</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <Alert bsStyle="warning">Well, fudge. We couldn't find that document!</Alert>;
};

ViewContact.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const contactId = props.params._id;
  const subscription = Meteor.subscribe('catalog.view', contactId);

  if (subscription.ready()) {
    const doc = Catalog.findOne(contactId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(ViewContact);
