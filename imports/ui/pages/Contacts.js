import React from 'react';
import ContactsTable from '../components/Tables/ContactsTable';

const Contacts = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Contacts</strong></h4>
          </div>
          <div className="card-block">
            <ContactsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;
