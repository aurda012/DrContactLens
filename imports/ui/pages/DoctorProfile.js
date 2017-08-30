/* eslint-disable max-len, no-return-assign */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import VirtualizedSelect from 'react-virtualized-select';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import patientEditor from '../../modules/patient-editor.js';

const STATES = require('../../api/data/states');

class DoctorProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    patientEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="firstName"]').focus(); }, 0);
  }

  render() {
    const options = STATES.US;
    const user = Meteor.user();
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
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>First Name</ControlLabel>
                      <FormControl
                        type="text"
                        name="firstName"
                        defaultValue={user.profile.name.first}
                        ref={firstName => (this.firstName = firstName)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Last Name</ControlLabel>
                      <FormControl
                        type="text"
                        name="lastName"
                        defaultValue={user.profile.name.last}
                        ref={lastName => (this.lastName = lastName)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Email Address</ControlLabel>
                      <FormControl
                        type="email"
                        name="emailAddress"
                        defaultValue={user.emails[0].address}
                        ref={emailAddress => (this.emailAddress = emailAddress)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <h4 className="page-header">Practice Details</h4>
                <Row>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Practice Name</ControlLabel>
                      <FormControl
                        type="practiceName"
                        name="practiceName"
                        defaultValue={user.profile.practiceName}
                        ref={practiceName => (this.practiceName = practiceName)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Practice Address</ControlLabel>
                      <FormControl
                        type="practiceAddress"
                        name="practiceAddress"
                        defaultValue={user.profile.practiceAddress}
                        ref={practiceAddress => (this.practiceAddress = practiceAddress)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Practice Phone Number</ControlLabel>
                      <FormControl
                        type="practicePhone"
                        name="practicePhone"
                        defaultValue={user.profile.practicePhone}
                        ref={practicePhone => (this.practicePhone = practicePhone)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Practice City</ControlLabel>
                      <FormControl
                        type="practiceCity"
                        name="practiceCity"
                        defaultValue={user.profile.practiceCity}
                        ref={practiceCity => (this.practiceCity = practiceCity)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Practice State</ControlLabel>
                      <VirtualizedSelect
                        name="practiceState"
                        options={options}
                        onChange={selectValue => this.setState({ selectValue })}
                        ref={practiceState => (this.practiceState = practiceState)}
                        defaultValue={user.profile.practiceState}
                        value={this.state.selectValue}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={ 12 } sm={ 4 } md={ 4 }>
                    <FormGroup>
                      <ControlLabel>Practice Zip</ControlLabel>
                      <FormControl
                        type="practiceZip"
                        name="practiceZip"
                        defaultValue={user.profile.practiceZip}
                        ref={practiceZip => (this.practiceZip = practiceZip)}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
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

export default DoctorProfile;
