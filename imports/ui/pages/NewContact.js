import React from 'react';
import ContactEditor from '../components/Editors/ContactEditor.js';

const NewContact = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
        <div className="card-header">
          <h4 style={{ margin: '5px' }}><strong>New Contact</strong></h4>
        </div>
          <div className="card-block">
            <ContactEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewContact;
