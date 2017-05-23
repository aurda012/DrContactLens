/* eslint-disable max-len, no-return-assign */

/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import patientEditor from '../../modules/patient-editor.js';

export default class PatientEditor extends React.Component {
  componentDidMount() {
    patientEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="firstName"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.patientEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
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
            <ControlLabel>Patient Status</ControlLabel>
            <FormControl
              type="text"
              name="patientStatus"
              defaultValue={ doc && doc.patientStatus }
              placeholder="Patient Status.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Brand</ControlLabel>
            <FormControl
              type="text"
              name="contactBrand"
              defaultValue={ doc && doc.contactBrand }
              placeholder="Contact Brand.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Power</ControlLabel>
            <FormControl
              type="text"
              name="powerRight"
              defaultValue={ doc && doc.powerRight }
              placeholder="Right Eye - Power.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Power</ControlLabel>
            <FormControl
              type="text"
              name="powerLeft"
              defaultValue={ doc && doc.powerLeft }
              placeholder="Left Eye - Power.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Cylinder</ControlLabel>
            <FormControl
              type="text"
              name="cylinderRight"
              defaultValue={ doc && doc.cylinderRight }
              placeholder="Right Eye - Cylinder.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Cylinder</ControlLabel>
            <FormControl
              type="text"
              name="cylinderLeft"
              defaultValue={ doc && doc.cylinderLeft }
              placeholder="Left Eye - Cylinder.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Axis</ControlLabel>
            <FormControl
              type="text"
              name="axisRight"
              defaultValue={ doc && doc.axisRight }
              placeholder="Right Eye - Axis.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Axis</ControlLabel>
            <FormControl
              type="text"
              name="axisLeft"
              defaultValue={ doc && doc.axisLeft }
              placeholder="Left Eye - Axis.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Add Power</ControlLabel>
            <FormControl
              type="text"
              name="addPowerRight"
              defaultValue={ doc && doc.addPowerRight }
              placeholder="Right Eye - Add Power.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Add Power</ControlLabel>
            <FormControl
              type="text"
              name="addPowerLeft"
              defaultValue={ doc && doc.addPowerLeft }
              placeholder="Left Eye - Add Power.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Base Curve</ControlLabel>
            <FormControl
              type="text"
              name="baseCurveRight"
              defaultValue={ doc && doc.baseCurveRight }
              placeholder="Right Eye - Base Curve.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Base Curve</ControlLabel>
            <FormControl
              type="text"
              name="baseCurveLeft"
              defaultValue={ doc && doc.baseCurveLeft }
              placeholder="Left Eye - Base Curve.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Right Eye - Diameter</ControlLabel>
            <FormControl
              type="text"
              name="diameterRight"
              defaultValue={ doc && doc.diameterRight }
              placeholder="Right Eye - Diameter.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Left Eye - Diameter</ControlLabel>
            <FormControl
              type="text"
              name="diameterLeft"
              defaultValue={ doc && doc.diameterLeft }
              placeholder="Left Eye - Diameter.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Last Exam</ControlLabel>
            <FormControl
              type="text"
              name="lastExam"
              defaultValue={ doc && doc.lastExam }
              placeholder="Last Exam.."
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 6 }>
          <FormGroup>
            <ControlLabel>Expiration Date</ControlLabel>
            <FormControl
              type="text"
              name="prescriptionExpiration"
              defaultValue={ doc && doc.prescriptionExpiration }
              placeholder="Expiration Date.."
            />
          </FormGroup>
        </Col>
      </Row>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Patient' }
      </Button>
    </form>);
  }
}

PatientEditor.propTypes = {
  doc: PropTypes.object,
};
