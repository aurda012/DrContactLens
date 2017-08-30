/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import VirtualizedSelect from 'react-virtualized-select';
import contactEditor from '../../../modules/contact-editor.js';

const MANUFACTURERS = require('../../../api/data/manufacturers');

export default class ContactEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    contactEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="manufacturer"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    const manufacturers = MANUFACTURERS.MANUFACTURERS;
    return (<form
      ref={ form => (this.contactEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Brand Name</ControlLabel>
            <FormControl
              type="text"
              name="SER_NAME"
              defaultValue={ doc && doc.brandName }
              placeholder="Contact Brand Name.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Manufacturer</ControlLabel>
            <VirtualizedSelect
              name="MAN_NAME"
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
              name="SER_RETAIL"
              defaultValue={ doc && doc.retailPrice }
              placeholder="Contact Retail Price.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Wholesale Price</ControlLabel>
            <FormControl
              type="text"
              name="SER_WHOLESALE"
              defaultValue={ doc && doc.wholesalePrice }
              placeholder="Contact Wholesale Price.."
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
        { doc && doc._id ? 'Save Changes' : 'Add Contact' }
      </Button>
    </form>);
  }
}

ContactEditor.propTypes = {
  doc: PropTypes.object,
};
