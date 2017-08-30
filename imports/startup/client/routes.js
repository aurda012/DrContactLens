/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import PortalAdmin from '../../ui/layouts/Portal/PortalAdmin';
import PortalDoctor from '../../ui/layouts/Portal/PortalDoctor';
import Registration from '../../ui/layouts/Public/Registration';
import LoginLayout from '../../ui/layouts/Public/Login';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import AdminRegistration from '../../ui/pages/AdminRegistration.js';
import DoctorRegistration from '../../ui/pages/DoctorRegistration.js';
import Doctors from '../../ui/pages/Doctors';
import DoctorProfile from '../../ui/pages/DoctorProfile';
import DoctorPayment from '../../ui/pages/DoctorPayment';
import DoctorSales from '../../ui/pages/DoctorSales';
import PopularBrands from '../../ui/pages/PopularBrands';
import OrderHistory from '../../ui/pages/OrderHistory';
import Orders from '../../ui/pages/Orders';
import AdminProfile from '../../ui/pages/AdminProfile';
import SalesReport from '../../ui/pages/SalesReport';
import DoctorSalesReport from '../../ui/pages/DoctorSalesReport';
import Contacts from '../../ui/pages/Contacts';
import ViewContact from '../../ui/pages/ViewContact';
import EditContact from '../../ui/pages/EditContact';
import NewContact from '../../ui/pages/NewContact';
import Patients from '../../ui/pages/Patients';
import AdminPatients from '../../ui/pages/AdminPatients';
import NewPatient from '../../ui/pages/NewPatient';
import ViewPatient from '../../ui/pages/ViewPatient';
import EditPatient from '../../ui/pages/EditPatient';
import PendingOrders from '../../ui/pages/PendingOrders';
import Solutions from '../../ui/pages/Solutions';
import NewSolution from '../../ui/pages/NewSolution';
import ViewSolution from '../../ui/pages/ViewSolution';
import EditSolution from '../../ui/pages/EditSolution';
import Discounts from '../../ui/pages/Discounts';
import NewDiscount from '../../ui/pages/NewDiscount';
import ViewDiscount from '../../ui/pages/ViewDiscount';
import EditDiscount from '../../ui/pages/EditDiscount';
import PatientOrder from '../../ui/pages/Checkout';
import PatientEmail from '../../ui/pages/PatientEmail';
import RecoverEmail from '../../ui/pages/RecoverEmail';

const authenticateAdmin = (nextState, replace) => {
  if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

const authenticateDoctor = (nextState, replace) => {
  // If no user, redirect to login
  if (!Roles.userIsInRole(Meteor.userId(), 'doctor')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/admin" name="Dashboard" component={ PortalAdmin }>
        <IndexRoute name="Patients" component={ AdminPatients } onEnter={ authenticateAdmin } />
        <Route name="Patients" path="/admin/patients" component={ AdminPatients } onEnter={ authenticateAdmin } />
        <Route name="Doctors" path="/admin/doctors" component={ Doctors } onEnter={ authenticateAdmin } />
        <Route name="Contacts" path="/admin/contacts" component={ Contacts } onEnter={ authenticateAdmin } />
        <Route name="New Contact" path="/admin/contacts/new" component={ NewContact } onEnter={ authenticateAdmin } />
        <Route name="Edit Contact" path="/admin/contacts/:_id/edit" component={ EditContact } onEnter={ authenticateAdmin } />
        <Route name="View Contact" path="/admin/contacts/:_id" component={ ViewContact } onEnter={ authenticateAdmin } />
        {/*<Route name="Discounts" path="/admin/discounts" component={ Discounts } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="New Discount" path="/admin/discounts/new" component={ NewDiscount } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="Edit Discount" path="/admin/discounts/:_id/edit" component={ EditDiscount } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="View Discount" path="/admin/discounts/:_id" component={ ViewDiscount } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="Solutions" path="/admin/solutions" component={ Solutions } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="New Solution" path="/admin/solutions/new" component={ NewSolution } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="Edit Solution" path="/admin/solutions/:_id/edit" component={ EditSolution } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="View Solution" path="/admin/solutions/:_id" component={ ViewSolution } onEnter={ authenticateAdmin } />*/}
        <Route name="Orders" path="/admin/orders" component={ Orders } onEnter={ authenticateAdmin } />
        {/*<Route name="Doctor Sales" path="/admin/doctor-sales" component={ DoctorSales } onEnter={ authenticateAdmin } />*/}
        {/*<Route name="Popular Brands" path="/admin/popular-brands" component={ PopularBrands } onEnter={ authenticateAdmin } />*/}
        <Route name="Sales Report" path="/admin/sales-reports" component={ SalesReport } onEnter={ authenticateAdmin } />
        <Route name="AdminProfile" path="/admin/profile" component={ AdminProfile } onEnter={ authenticateAdmin } />
      </Route>
      <Route path="/doctor" name="Dashboard" component={ PortalDoctor }>
        <IndexRoute name="Patients" component={ Patients } onEnter={ authenticateDoctor } />
        <Route name="Patients" path="/doctor/patients" component={ Patients } onEnter={ authenticateDoctor } />
        <Route name="New Patient" path="/doctor/patients/new" component={ NewPatient } onEnter={ authenticateDoctor } />
        <Route name="Edit Patient" path="/doctor/patients/:_id/edit" component={ EditPatient } onEnter={ authenticateDoctor } />
        <Route name="View Patient" path="/doctor/patients/:_id" component={ ViewPatient } onEnter={ authenticateDoctor } />
        <Route name="Pending Orders" path="/doctor/pending-orders" component={ PendingOrders } onEnter={ authenticateDoctor } />
        <Route name="Order History" path="/doctor/orders" component={ OrderHistory } onEnter={ authenticateDoctor } />
        <Route name="Sales Report" path="/doctor/sales-reports" component={ DoctorSalesReport } onEnter={ authenticateDoctor } />
        <Route name="Doctor Profile" path="/doctor/profile" component={ DoctorProfile } onEnter={ authenticateDoctor } />
        <Route name="Doctor Profile" path="/doctor/payment" component={ DoctorPayment } onEnter={ authenticateDoctor } />
      </Route>
      <Route path="/" component={ Registration }>
        <Route name="Patient Order" path="/checkout/:_id" component={ PatientOrder } />
        <Route name="Admin Registration" path="/registration/admin" component={ AdminRegistration } />
        <Route name="Doctor Registration" path="/registration/doctor" component={ DoctorRegistration } />
      </Route>
      <Route path="/" component={ LoginLayout }>
        <IndexRoute name="login" component={ Login } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="patient" path="/patient" component={ PatientEmail } />
        <Route name="recover-email" path="/recover-email" component={ RecoverEmail } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});
