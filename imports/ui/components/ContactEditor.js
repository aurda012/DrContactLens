/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import contactEditor from '../../modules/contact-editor.js';

export default class ContactEditor extends React.Component {
  componentDidMount() {
    contactEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="manufacturer"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.contactEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Manufacturer</ControlLabel>
        <FormControl
          type="text"
          name="manufacturer"
          defaultValue={ doc && doc.manufacturer }
          placeholder="Contact Manufacturer.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Brand Name</ControlLabel>
        <FormControl
          type="text"
          name="brandName"
          defaultValue={ doc && doc.brandName }
          placeholder="Contact Brand Name.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Retail Price</ControlLabel>
        <FormControl
          type="text"
          name="retailPrice"
          defaultValue={ doc && doc.retailPrice }
          placeholder="Contact Retail Price.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Wholesale Price</ControlLabel>
        <FormControl
          type="text"
          name="wholesalePrice"
          defaultValue={ doc && doc.wholesalePrice }
          placeholder="Contact Wholesale Price.."
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Contact' }
      </Button>
    </form>);
  }
}

ContactEditor.propTypes = {
  doc: PropTypes.object,
};
