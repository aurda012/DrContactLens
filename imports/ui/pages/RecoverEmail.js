/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { Row, Col, ControlLabel, FormGroup, FormControl, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import handlePatientEmail from '../../modules/patient-email';

class RecoverEmail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDoctorId: 0,
    };
    this.changeDoctor = this.changeDoctor.bind(this);
  }

  componentDidMount() {
    handlePatientEmail({ component: this });
  }

  changeDoctor(e) {
    this.setState({
      currentDoctorId: e.target.value,
    });
  }

  render() {
    const { doctors } = this.props;
    return (
      <div className="z-depth-2">
        <Row>
          <Col
            xs={10}
            sm={8}
            smOffset={3}
            md={6}
            mdOffset={4}
            lg={4}
            lgOffset={4}
            className="portal-login text-center"
          >
            <div className="login-app-title">
              <img src={'../img/loginlogo.png'} height="107" width="150" alt="logo" />
            </div>
            <div style={{ width: '90%', marginLeft: '5%' }}>
              <Alert bsStyle="info">Please contact your doctor to update your email address on file.</Alert>
              <FormGroup>
                <ControlLabel>Choose your Doctor:</ControlLabel>
                <FormControl onChange={this.currentDoctorId} name="contactDoctorId" componentClass="select" placeholder="select">
                  {doctors.map((doctor, Index) => (
                    (<option key={ Index } value={ Index }>Dr. { doctor.profile.name.first } { doctor.profile.name.last }</option>
                    )))}
                </FormControl>
              </FormGroup>
              <ListGroup>
                <ListGroupItem>
                  <strong>Phone Number:</strong> { (doctors[this.state.currentDoctorId] && doctors[this.state.currentDoctorId].profile.practicePhone) }
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

RecoverEmail.propTypes = {
  doctors: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('users');
  if (subscription.ready()) {
    const doctors = Meteor.users.find({ roles: 'doctor' }).fetch();
    onData(null, { doctors });
  }
};

export default composeWithTracker(composer)(RecoverEmail);
