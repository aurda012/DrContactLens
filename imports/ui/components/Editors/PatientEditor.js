/* eslint-disable max-len, no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import VirtualizedSelect from 'react-virtualized-select';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import patientEditor from '../../../modules/patient-editor';
import DateField from '../DateField/DateField';
import Catalog from '../../../api/catalog/catalog';
import Loading from '../Loading/Loading';

const STATES = require('../../../api/data/states');
const COMPANIES = require('../../../api/data/insurance_companies');

class PatientEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCatalogIdR: 0,
      currentCatalogIdL: 0,
    };
    this.changeBrandRight = this.changeBrandRight.bind(this);
    this.changeBrandLeft = this.changeBrandLeft.bind(this);
  }
  componentDidMount() {
    patientEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="firstName"]').focus(); }, 0);
  }

  changeBrandRight(e) {
    this.setState({
      currentCatalogIdR: e.target.value,
    });
  }

  changeBrandLeft(e) {
    this.setState({
      currentCatalogIdL: e.target.label,
    });
  }

  render() {
    const options = STATES.US;
    const insurance = COMPANIES.INSURANCE;
    const { doc, catalog } = this.props;
    return (<form
      ref={ form => (this.patientEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <h4 className="page-header" style={{ marginTop: '10px' }}>Patient Profile</h4>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              name="firstName"
              defaultValue={ doc && doc.firstName }
              placeholder="First Name.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              name="lastName"
              defaultValue={ doc && doc.lastName }
              placeholder="Last Name.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="text"
              name="emailAddress"
              defaultValue={ doc && doc.emailAddress }
              placeholder="Email Address.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl
              type="text"
              name="phoneNumber"
              defaultValue={ doc && doc.phoneNumber }
              placeholder="Phone Number.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Date Of Birth</ControlLabel>
            <DateField
              ref={dateOfBirth => (this.dateOfBirth = dateOfBirth)}
              value={(new Date()).toISOString()}
              name="dateOfBirth"
              defaultValue={doc && doc.dateOfBirth}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Insurance Company</ControlLabel>
            <VirtualizedSelect
              name="insuranceCompany"
              options={insurance}
              defaultValue={ doc && doc.insuranceCompany }
              onChange={selectValueInsurance => this.setState({ selectValueInsurance })}
              value={this.state.selectValueInsurance}
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Insurance Member ID</ControlLabel>
            <FormControl
              type="text"
              name="insuranceId"
              defaultValue={ doc && doc.insuranceId }
              placeholder="Insurance Member ID.."
            />
          </FormGroup>
        </Col>
      </Row>
      <h4 className="page-header">Patient Address</h4>
      <Row>
        <Col xs={ 12 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Street Address</ControlLabel>
            <FormControl
              type="text"
              name="streetAddress"
              defaultValue={ doc && doc.streetAddress }
              placeholder="Street Address.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl
              type="text"
              name="cityAddress"
              defaultValue={ doc && doc.cityAddress }
              placeholder="City.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 12 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <VirtualizedSelect
              name="stateAddress"
              options={options}
              defaultValue={ doc && doc.stateAddress }
              onChange={selectValue => this.setState({ selectValue })}
              value={this.state.selectValue}
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl
              type="text"
              name="zipAddress"
              defaultValue={ doc && doc.zipAddress }
              placeholder="Zip Code.."
            />
          </FormGroup>
        </Col>
      </Row>
      <h4 className="page-header">Prescription Details</h4>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Last Exam</ControlLabel>
            <DateField
              ref={lastExam => (this.lastExam = lastExam)}
              name="lastExam"
              defaultValue={ doc && doc.lastExam }
              value={(new Date()).toISOString()}
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Expiration Date</ControlLabel>
            <DateField
              ref={prescriptionExpiration => (this.prescriptionExpiration = prescriptionExpiration)}
              name="prescriptionExpiration"
              defaultValue={ doc && doc.prescriptionExpiration }
              value={(new Date()).toISOString()}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Brand Right</ControlLabel>
            <FormControl onChange={this.changeBrandRight} name="contactBrandRight" componentClass="select" placeholder="select" defaultValue={ doc && doc.contactBrandRight }>
              {catalog.map((catalogItem, Index) => (
                (<option key={ Index } value={ Index }>{ catalogItem.SER_NAME }</option>
              )))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Brand Left</ControlLabel>
            <FormControl onChange={this.changeBrandLeft} name="contactBrandLeft" componentClass="select" placeholder="select" defaultValue={ doc && doc.contactBrandLeft }>
              {catalog.map((catalogItem, Index) => (
                (<option key={ Index } value={ Index }>{ catalogItem.SER_NAME }</option>
              )))}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Power</ControlLabel>
            <FormControl name="powerRight" componentClass="select" placeholder="select" defaultValue={ doc && doc.powerRight }>
              {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRD_POWER.map((power, index) => (
                <option key={ index } value={ power }>{ power }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Power</ControlLabel>
            <FormControl name="powerLeft" componentClass="select" placeholder="select" defaultValue={ doc && doc.powerLeft }>
              {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRD_POWER.map((power, index) => (
                <option key={ index } value={ power }>{ power }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Cylinder</ControlLabel>
            <FormControl
              name="cylinderRight"
              componentClass="select"
              defaultValue={ doc && doc.cylinderRight }
              placeholder="Right Eye - Cylinder.."
            >
            {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRD_CYLINDER.map((cylinder, index) => (
              <option key={ index } value={ cylinder }>{ cylinder }</option>
            ))}
          </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Cylinder</ControlLabel>
            <FormControl
              name="cylinderLeft"
              componentClass="select"
              defaultValue={ doc && doc.cylinderLeft }
              placeholder="Left Eye - Cylinder.."
            >
            {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRD_CYLINDER.map((cylinder, index) => (
              <option key={ index } value={ cylinder }>{ cylinder }</option>
            ))}
          </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Axis</ControlLabel>
            <FormControl
              name="axisRight"
              componentClass="select"
              defaultValue={ doc && doc.axisRight }
              placeholder="Right Eye - Axis.."
            >
            {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRD_AXIS.map((axis, index) => (
              <option key={ index } value={ axis }>{ axis }</option>
            ))}
          </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Axis</ControlLabel>
            <FormControl
              name="axisLeft"
              componentClass="select"
              defaultValue={ doc && doc.axisLeft }
              placeholder="Left Eye - Axis.."
            >
            {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRD_AXIS.map((axis, index) => (
              <option key={ index } value={ axis }>{ axis }</option>
            ))}
          </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Add Power</ControlLabel>
            <FormControl
              name="addPowerRight"
              componentClass="select"
              defaultValue={ doc && doc.addPowerRight }
              placeholder="Right Eye - Add Power.."
            >
            {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRD_ADDITION.map((addition, index) => (
              <option key={ index } value={ addition }>{ addition }</option>
            ))}
          </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Add Power</ControlLabel>
            <FormControl
              name="addPowerLeft"
              componentClass="select"
              defaultValue={ doc && doc.addPowerLeft }
              placeholder="Left Eye - Add Power.."
            >
            {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRD_ADDITION.map((addition, index) => (
              <option key={ index } value={ addition }>{ addition }</option>
            ))}
          </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Base Curve</ControlLabel>
            <FormControl name="baseCurveRight" componentClass="select" placeholder="select" defaultValue={ doc && doc.baseCurveRight }>
              {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRF_BASECURVE.map((bc, index) => (
                <option key={ index } value={ bc }>{ bc }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Base Curve</ControlLabel>
            <FormControl name="baseCurveLeft" componentClass="select" placeholder="select" defaultValue={ doc && doc.addBaseCurveLeft }>
              {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRF_BASECURVE.map((bc, index) => (
                <option key={ index } value={ bc }>{ bc }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Diameter</ControlLabel>
            <FormControl name="diameterRight" componentClass="select" placeholder="select" defaultValue={ doc && doc.diameterRight }>
              {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRF_DIAMETER.map((diameter, index) => (
                <option key={ index } value={ diameter }>{ diameter }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Diameter</ControlLabel>
            <FormControl name="diameterLeft" componentClass="select" placeholder="select" defaultValue={ doc && doc.diameterLeft }>
              {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRF_DIAMETER.map((diameter, index) => (
                <option key={ index } value={ diameter }>{ diameter }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Color</ControlLabel>
            <FormControl name="colorRight" componentClass="select" placeholder="select" defaultValue={ doc && doc.colorRight }>
              {catalog[this.state.currentCatalogIdR] && catalog[this.state.currentCatalogIdR].PRD_COLOR.map((color, index) => (
                <option key={ index } value={ color }>{ color }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Color</ControlLabel>
            <FormControl name="colorLeft" componentClass="select" placeholder="select" defaultValue={ doc && doc.colorLeft }>
              {catalog[this.state.currentCatalogIdL] && catalog[this.state.currentCatalogIdL].PRD_COLOR.map((color, index) => (
                <option key={ index } value={ color }>{ color }</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <Button type="submit" style={{ float: 'right' }} bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Patient' }
      </Button>
    </form>);
  }
}

PatientEditor.propTypes = {
  doc: PropTypes.object,
  catalog: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('catalog');

  if (subscription.ready()) {
    const catalog = Catalog.find().fetch();
    onData(null, { catalog });
  }
};

export default composeWithTracker(composer, Loading)(PatientEditor);
