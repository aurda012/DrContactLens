import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import ContactsTable from '../components/ContactsTable';

const Contacts = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> Contacts
          </div>
          <div className="card-block">
            <Link to="/admin/contacts/new">
              <Button
                bsStyle="success"
                className="pull-right"
                style={{margin: '10px'}}
              >New Contact</Button>
            </Link>
            <ContactsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;
