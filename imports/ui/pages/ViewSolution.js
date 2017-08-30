/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Solutions from '../../api/solutions/solutions';

const ViewSolution = ({ doc }) => {
  return doc ? (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-offset-2 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 style={{ margin: '5px' }}><strong>{ doc.brandName }</strong></h4>
            </div>
            <div className="card-block">
              <ul className="list-group">
                <li className="list-group-item"><strong>Brand Name: </strong>&nbsp;{ doc && doc.brandName }</li>
                <li className="list-group-item"><strong>Manufacturer: </strong>&nbsp;{ doc && doc.manufacturer }</li>
                <li className="list-group-item"><strong>Retail Price: </strong>&nbsp;{ doc && doc.retailPrice }</li>
                <li className="list-group-item"><strong>Wholesale Price: </strong>&nbsp;{ doc && doc.wholesalePrice }</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <Alert bsStyle="warning">Well, fudge. We couldn't find that document!</Alert>;
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
