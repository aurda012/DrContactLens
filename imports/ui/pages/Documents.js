import React from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';
import DocumentsList from '../components/DocumentsList';

const Documents = () => (
  <div className="Index">
    <Jumbotron>
      <h4 className="pull-left">Documents</h4>
      <Link to="/documents/new">
        <Button
          bsStyle="success"
          className="pull-right"
        >New Document</Button>
      </Link>
      <p><DocumentsList /></p>
    </Jumbotron>
  </div>
);

export default Documents;
