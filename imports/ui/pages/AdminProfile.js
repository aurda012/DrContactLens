/* eslint-disable max-len, no-return-assign */
import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import patientEditor from '../../modules/patient-editor.js';

class AdminProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    patientEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="firstName"]').focus(); }, 0);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 style={{ margin: '5px' }}><strong>Doctor Profile</strong></h4>
              </div>
              <div className="card-block">
                <h4 style={{ marginTop: '0px' }} className="page-header">Personal Details</h4>
                <Row>
                  <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>First Name</ControlLabel>
                      <FormControl
                        type="text"
                        name="firstName"
                        placeholder="First Name.."
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Last Name</ControlLabel>
                      <FormControl
                        type="text"
                        name="lastName"
                        placeholder="Last Name.."
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Email Address</ControlLabel>
                      <FormControl
                        type="text"
                        name="emailAddress"
                        placeholder="Email Address.."
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <h4 className="page-header">Change Password</h4>
                <Row>
                  <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Old Password</ControlLabel>
                      <FormControl
                        type="password"
                        name="practiceName"
                        placeholder="Old Password.."
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>New Password</ControlLabel>
                      <FormControl
                        type="password"
                        name="practiceAddress"
                        placeholder="New Password.."
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Confirm New Password</ControlLabel>
                      <FormControl
                        type="password"
                        name="practicePhoneNumber"
                        placeholder="Confirm Password.."
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <h4 style={{ marginTop: '5px' }} className="page-header"></h4>
                <Button style={{ float: 'right' }} type="submit" bsStyle="success">
                  { 'Save Changes' }
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
