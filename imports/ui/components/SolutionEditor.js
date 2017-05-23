/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import solutionEditor from '../../modules/solution-editor.js';

export default class SolutionEditor extends React.Component {
  componentDidMount() {
    solutionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="manufacturer"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.solutionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Manufacturer</ControlLabel>
        <FormControl
          type="text"
          name="manufacturer"
          defaultValue={ doc && doc.manufacturer }
          placeholder="Solution Manufacturer.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Brand Name</ControlLabel>
        <FormControl
          type="text"
          name="brandName"
          defaultValue={ doc && doc.brandName }
          placeholder="Solution Brand Name.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Retail Price</ControlLabel>
        <FormControl
          type="text"
          name="retailPrice"
          defaultValue={ doc && doc.retailPrice }
          placeholder="Solution Retail Price.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Wholesale Price</ControlLabel>
        <FormControl
          type="text"
          name="wholesalePrice"
          defaultValue={ doc && doc.wholesalePrice }
          placeholder="Solution Wholesale Price.."
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Solution' }
      </Button>
    </form>);
  }
}

SolutionEditor.propTypes = {
  doc: PropTypes.object,
};
