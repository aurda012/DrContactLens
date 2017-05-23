import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Contacts from '../../api/contacts/contacts';
import ContactEditor from '../components/ContactEditor';
import NotFound from './NotFound';

const EditContact = ({ doc }) => (doc ? (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <h4 className="page-header">Editing "{ doc.brandName }"</h4>
            <ContactEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
) : <NotFound />);

EditContact.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const contactId = props.params._id;
  const subscription = Meteor.subscribe('contacts.view', contactId);

  if (subscription.ready()) {
    const doc = Contacts.findOne(contactId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(EditContact);
