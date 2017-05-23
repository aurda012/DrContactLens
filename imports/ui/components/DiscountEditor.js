/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import discountEditor from '../../modules/discount-editor.js';

export default class DiscountEditor extends React.Component {
  componentDidMount() {
    discountEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="discountCode"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.discountEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>DiscountCode</ControlLabel>
        <FormControl
          type="text"
          name="discountCode"
          defaultValue={ doc && doc.discountCode }
          placeholder="Discount Code.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Start Date</ControlLabel>
        <FormControl
          type="text"
          name="startDate"
          defaultValue={ doc && doc.startDate }
          placeholder="Start Date.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>End Date</ControlLabel>
        <FormControl
          type="text"
          name="endDate"
          defaultValue={ doc && doc.endDate }
          placeholder="End Date.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Discount Amount</ControlLabel>
        <FormControl
          type="text"
          name="discountAmount"
          defaultValue={ doc && doc.discountAmount }
          placeholder="Discount Amount.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Minimum Spend</ControlLabel>
        <FormControl
          type="text"
          name="minimumSpend"
          defaultValue={ doc && doc.minimumSpend }
          placeholder="Minimum Spend.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Discount Type</ControlLabel>
        <FormControl
          type="text"
          name="discountType"
          defaultValue={ doc && doc.discountType }
          placeholder="Discount Type.."
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Uses</ControlLabel>
        <FormControl
          type="text"
          name="uses"
          defaultValue={ doc && doc.uses }
          placeholder="Discount Amount.."
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Discount' }
      </Button>
    </form>);
  }
}

DiscountEditor.propTypes = {
  doc: PropTypes.object,
};
