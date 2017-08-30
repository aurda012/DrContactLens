import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { Row, Col } from 'react-bootstrap';
import StepZilla from 'react-stepzilla';
import Patients from '../../api/patients/patients';
import PatientOrderForm from '../components/PatientCheckout/PatientCheckout';
import PatientOrderForm2 from '../components/PatientCheckout/PatientCheckout2';

class PatientOrder extends React.Component {
  render() {
    const { doc } = this.props;
    return (
      <div className="z-depth-2">
        <Row>
          <Col xs={ 10 } xsOffset={1} sm={ 8 } smOffset={ 2 } md={ 6 } mdOffset={ 3 } className="Registration">
            <PatientOrderForm doc={ doc } />
          </Col>
        </Row>
      </div>
    );
  }
}

PatientOrder.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const patientId = props.params._id;
  const subscription = Meteor.subscribe('patients.view', patientId);

  if (subscription.ready()) {
    const doc = Patients.findOne(patientId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(PatientOrder);
