import React from 'react';
import ContactEditor from '../components/ContactEditor.js';

const NewContact = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <h4 className="page-header">New Contact</h4>
            <ContactEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewContact;
