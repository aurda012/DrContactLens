import React from 'react';
import SolutionEditor from '../components/Editors/SolutionEditor.js';

const NewSolution = () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
        <div className="card-header">
          <h4 style={{ margin: '5px' }}><strong>New Solution</strong></h4>
        </div>
          <div className="card-block">
            <SolutionEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewSolution;
