import { Meteor } from 'meteor/meteor';
import Doctors from '../doctors';
import Plans from '../../plans/plans';
import Invoices from '../../invoices/invoices';

Meteor.publish('doctor.subscription', function doctorSubscription() {
  return [
    Doctors.find({ userId: this.userId }),
    Plans.find({}, { fields: { label: 1, planId: 1 } }),
  ];
});

Meteor.publish('doctor.invoices', function doctorInvoices() {
  return Invoices.find({ userId: this.userId });
});
