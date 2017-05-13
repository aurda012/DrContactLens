/* eslint-disable no-console, consistent-return */

import Doctors from '../../../../api/doctors/doctors';

const doctorSubscriptionDeleted = ({ data }) => {
  try {
    const doctor = Doctors.findOne({ doctorId: data.doctor });

    if (doctor) {
      Doctors.update(doctor._id, {
        $unset: {
          'subscription.id': '',
          'subscription.plan': '',
          'subscription.current_period_end': '',
        },
        $set: {
          'subscription.status': 'none',
        },
      });
    }
  } catch (exception) {
    console.warn(`[doctorSubscriptionDeleted] ${exception}`);
  }
};

export default doctorSubscriptionDeleted;
