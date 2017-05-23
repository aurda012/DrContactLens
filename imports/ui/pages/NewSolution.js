import React from 'react';
import SolutionEditor from '../components/SolutionEditor.js';

const NewSolution = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <h4 className="page-header">New Solution</h4>
            <SolutionEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewSolution;
