import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Alert } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import Contacts from '../../api/catalog/catalog';
import ContactEditor from '../components/Editors/ContactEditor';

const renderContactEditor = (doc) => {
  return doc ? (<div>
    <h4 className="page-header">Editing "{ doc.brandName }"</h4>
    <ContactEditor doc={ doc } />
  </div>) : <Alert bsStyle="warning">Shucks. That document isn't for you to edit!</Alert>;
};

const EditContact = ({ doc }) => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            { renderContactEditor(doc) }
          </div>
        </div>
      </div>
    </div>
  </div>
);

EditContact.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const contactId = props.params._id;
  const subscription = Meteor.subscribe('catalog.view', contactId);

  if (subscription.ready()) {
    const doc = Contacts.findOne(contactId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(EditContact);
