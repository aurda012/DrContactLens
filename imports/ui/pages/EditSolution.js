import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Solutions from '../../api/solutions/solutions';
import SolutionEditor from '../components/SolutionEditor';
import NotFound from './NotFound';

const EditSolution = ({ doc }) => (doc ? (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <h4 className="page-header">Editing "{ doc.brandName }"</h4>
            <SolutionEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
) : <NotFound />);

EditSolution.propTypes = {
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

export default composeWithTracker(composer)(EditSolution);
