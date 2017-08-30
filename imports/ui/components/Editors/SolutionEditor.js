/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import VirtualizedSelect from 'react-virtualized-select';
import solutionEditor from '../../../modules/solution-editor.js';

const MANUFACTURERS = require('../../../api/data/manufacturers');

export default class SolutionEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    solutionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="manufacturer"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    const manufacturers = MANUFACTURERS.MANUFACTURERS;
    return (<form
      ref={ form => (this.solutionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Brand Name</ControlLabel>
            <FormControl
              type="text"
              name="brandName"
              defaultValue={ doc && doc.brandName }
              placeholder="Solution Brand Name.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Manufacturer</ControlLabel>
            <VirtualizedSelect
              name="manufacturer"
              options={manufacturers}
              onChange={selectValueInsurance => this.setState({ selectValueInsurance })}
              value={this.state.selectValueInsurance}
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Retail Price</ControlLabel>
            <FormControl
              type="text"
              name="retailPrice"
              defaultValue={ doc && doc.retailPrice }
              placeholder="Solution Retail Price.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Wholesale Price</ControlLabel>
            <FormControl
              type="text"
              name="wholesalePrice"
              defaultValue={ doc && doc.wholesalePrice }
              placeholder="Solution Wholesale Price.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 12 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Upload Image</ControlLabel>
            <FormControl
              type="file"
              name="contactPhoto"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button type="submit" style={{ 'margin-top': '20px', float: 'right' }} bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Solution' }
      </Button>
    </form>);
  }
}

SolutionEditor.propTypes = {
  doc: PropTypes.object,
};
