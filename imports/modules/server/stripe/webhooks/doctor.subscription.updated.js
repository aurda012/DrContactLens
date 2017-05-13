/* eslint-disable no-console, consistent-return */

import Doctors from '../../../../api/doctors/doctors';

const doctorSubscriptionUpdated = ({ data }) => {
  try {
    const doctor = Doctors.findOne({ doctorId: data.doctor });

    if (doctor) {
      Doctors.update(doctor._id, {
        $set: {
          'subscription.id': data.id,
          'subscription.status': status,
          'subscription.plan': data.plan.id,
          'subscription.current_period_end': data.current_period_end,
        },
      });
    }
  } catch (exception) {
    console.warn(`[doctorSubscriptionUpdated] ${exception}`);
  }
};

export default doctorSubscriptionUpdated;
