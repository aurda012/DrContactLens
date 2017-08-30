/* eslint-disable max-len, no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import DateField from '../DateField/DateField';
import discountEditor from '../../../modules/discount-editor.js';

export default class DiscountEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
      <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Discount Code</ControlLabel>
            <FormControl
              type="text"
              name="discountCode"
              defaultValue={ doc && doc.discountCode }
              placeholder="Discount Code.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Start Date</ControlLabel>
            <DateField
              ref={startDate => (this.startDate = startDate)}
              value={(new Date()).toISOString()}
              name="startDate"
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>End Date</ControlLabel>
            <DateField
              ref={endDate => (this.startDate = endDate)}
              value={(new Date()).toISOString()}
              name="endDate"
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Discount Amount</ControlLabel>
            <FormControl
              type="text"
              name="discountAmount"
              defaultValue={ doc && doc.discountAmount }
              placeholder="Discount Amount.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Minimum Spend</ControlLabel>
            <FormControl
              type="text"
              name="minimumSpend"
              defaultValue={ doc && doc.minimumSpend }
              placeholder="Minimum Spend.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <FormGroup>
            <ControlLabel>Discount Type</ControlLabel>
            <FormControl name="discountType" componentClass="select" placeholder="select">
              <option key="1" value="Single Use">Single Uses</option>
              <option key="2" value="Multiple Use">Multiple Uses</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Discount' }
      </Button>
    </form>);
  }
}

DiscountEditor.propTypes = {
  doc: PropTypes.object,
};
