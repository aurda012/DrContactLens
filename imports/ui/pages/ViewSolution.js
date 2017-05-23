import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Solutions from '../../api/solutions/solutions';
import { removeSolution } from '../../api/solutions/methods';
import NotFound from './NotFound';

const handleEdit = (_id) => {
  browserHistory.push(`/admin/solutions/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeSolution.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Solution deleted!', 'success');
        browserHistory.push('/admin/solutions');
      }
    });
  }
};

const ViewSolution = ({ doc }) => {
  return doc ? (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-offset-2 col-lg-8">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-align-justify"></i> { doc.brandName }
            </div>
            <div className="card-block">
              <div>
                <h4>Brand Name: { doc && doc.brandName }</h4>
                <h4>Manufacturer: { doc && doc.manufacturer }</h4>
                <h4>Retail Price: { doc && doc.retailPrice }</h4>
                <h4>Wholesale Price: { doc && doc.wholesalePrice }</h4>
              </div>
              <ButtonGroup className="pull-right" bsSize="medium">
                <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
                <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <NotFound />;
};

ViewSolution.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const solutionId = props.params._id;
  const subscription = Meteor.subscribe('solutions.view', solutionId);

  if (subscription.ready()) {
    const doc = Solutions.findOne(solutionId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(ViewSolution);
