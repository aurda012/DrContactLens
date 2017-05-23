import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Plans from '../../api/plans/plans';
import Contacts from '../../api/contacts/contacts';
import Patients from '../../api/patients/patients';
import Solutions from '../../api/solutions/solutions';
import Discounts from '../../api/discounts/discounts';


const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' },
  },
  roles: ['admin'],
}, {
  email: 'example@doctor.com',
  password: 'password',
  profile: {
    name: { first: 'Patrick', last: 'Winslow' },
  },
  roles: ['doctor'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});


const plans = [{
  planId: 'admin',
  label: 'Admin Account (Wholesaler to other Doctors)',
  price: 99999,
}, {
  planId: 'doctor',
  label: 'Doctor Portal',
  price: 9999,
}, {
  planId: 'doctor-admin',
  label: 'Extra Doctor Portal Admin (Large Practice)',
  price: 999,
}, {
  planId: 'patient',
  label: 'Patient',
  price: 499,
}];

plans.forEach(({ planId, label, price }) => {
  const planExists = Plans.findOne({ planId });
  if (!planExists) Plans.insert({ planId, label, price });
});

const patients = [{
  firstName: 'John',
  lastName: 'Doe',
  emailAddress: 'john@doe.com',
  lastExam: 'September 15, 2016',
  contactBrand: '0.5',
  powerRight: '0.5',
  powerLeft: '0.5',
  cylinderRight: '0.5',
  cylinderLeft: '0.5',
  axisRight: '0.5',
  axisLeft: '0.5',
  addPowerRight: '0.5',
  addPowerLeft: '0.5',
  baseCurveRight: '0.5',
  baseCurveLeft: '0.5',
  diameterRight: '0.5',
  diameterLeft: '0.5',
  prescriptionExpiration: 'September 15, 2017',
  patientStatus: 'Active',
}, {
  firstName: 'Brittany',
  lastName: 'Love',
  emailAddress: 'brittany@love.com',
  lastExam: 'July 12, 2016',
  contactBrand: '0.5',
  powerRight: '0.5',
  powerLeft: '0.5',
  cylinderRight: '0.5',
  cylinderLeft: '0.5',
  axisRight: '0.5',
  axisLeft: '0.5',
  addPowerRight: '0.5',
  addPowerLeft: '0.5',
  baseCurveRight: '0.5',
  baseCurveLeft: '0.5',
  diameterRight: '0.5',
  diameterLeft: '0.5',
  prescriptionExpiration: 'July 12, 2017',
  patientStatus: 'Pending',
}, {
  firstName: 'Josh',
  lastName: 'Henry',
  emailAddress: 'josh@henry.com',
  lastExam: 'October 20, 2017',
  contactBrand: '0.5',
  powerRight: '0.5',
  powerLeft: '0.5',
  cylinderRight: '0.5',
  cylinderLeft: '0.5',
  axisRight: '0.5',
  axisLeft: '0.5',
  addPowerRight: '0.5',
  addPowerLeft: '0.5',
  baseCurveRight: '0.5',
  baseCurveLeft: '0.5',
  diameterRight: '0.5',
  diameterLeft: '0.5',
  prescriptionExpiration: 'October 20, 2017',
  patientStatus: 'Active',
}, {
  firstName: 'Will',
  lastName: 'Right',
  emailAddress: 'will@right.com',
  lastExam: 'November 20, 2016',
  contactBrand: '0.5',
  powerRight: '0.5',
  powerLeft: '0.5',
  cylinderRight: '0.5',
  cylinderLeft: '0.5',
  axisRight: '0.5',
  axisLeft: '0.5',
  addPowerRight: '0.5',
  addPowerLeft: '0.5',
  baseCurveRight: '0.5',
  baseCurveLeft: '0.5',
  diameterRight: '0.5',
  diameterLeft: '0.5',
  prescriptionExpiration: 'November 20, 2017',
  patientStatus: 'Active',
}];

patients.forEach(({ firstName,
                    lastName,
                    emailAddress,
                    lastExam,
                    contactBrand,
                    powerRight,
                    powerLeft,
                    cylinderRight,
                    cylinderLeft,
                    axisRight,
                    axisLeft,
                    addPowerRight,
                    addPowerLeft,
                    baseCurveRight,
                    baseCurveLeft,
                    diameterRight,
                    diameterLeft,
                    prescriptionExpiration,
                    patientStatus }) => {
  const patientExists = Patients.findOne({ emailAddress });
  if (!patientExists) {
    Patients.insert({ firstName,
      lastName,
      emailAddress,
      lastExam,
      contactBrand,
      powerRight,
      powerLeft,
      cylinderRight,
      cylinderLeft,
      axisRight,
      axisLeft,
      addPowerRight,
      addPowerLeft,
      baseCurveRight,
      baseCurveLeft,
      diameterRight,
      diameterLeft,
      prescriptionExpiration,
      patientStatus });
  }
});

const contacts = [{
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Air Optix Aqua 6 pack',
  wholesalePrice: '$26.85',
  retailPrice: '$44.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Air Optix Aqua Multifocal 6 pack',
  wholesalePrice: '$49.35',
  retailPrice: '$81.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Air Optix Colors 6 Pack',
  wholesalePrice: '$54.00',
  retailPrice: '$83.00',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Air Optix For Astigmatism 6 pack',
  wholesalePrice: '$37.70',
  retailPrice: '$61.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Air Optix Night and Day Aqua 6 Pack',
  wholesalePrice: '$45.60',
  retailPrice: '$69.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Air Optix Plus HydraGlyde 6pk',
  wholesalePrice: '$29.50',
  retailPrice: '$49.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'PureVision 2 6 Pack',
  wholesalePrice: '$41.50',
  retailPrice: '$59.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'PureVision 2 for Astigmatism 6 Pack',
  wholesalePrice: '$38.85',
  retailPrice: '$55.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'PureVision 2 for Presbyopia 6 Pack',
  wholesalePrice: '$47.20',
  retailPrice: '$73.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'PureVision 6 pack',
  wholesalePrice: '$49.50',
  retailPrice: '$59.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'PureVision Multi-Focal 6 pack',
  wholesalePrice: '$54.30',
  retailPrice: '$79.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'PureVision Toric 6 pack',
  wholesalePrice: '$41.50',
  retailPrice: '$69.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Ultra 6 pack',
  wholesalePrice: '$30.99',
  retailPrice: '$57.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Ultra for Presbyopia 6pk',
  wholesalePrice: '$52.99',
  retailPrice: '$84.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Clearcolor Circle 6 Pack',
  wholesalePrice: '$30.99',
  retailPrice: '$53.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Clearcolor Elements 6 Pack',
  wholesalePrice: '$30.99',
  retailPrice: '$53.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Clearcolor Vibrant 6 Pack',
  wholesalePrice: '$30.99',
  retailPrice: '$53.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Eyedia Precise Monthly 6 Pack',
  wholesalePrice: '$26.25',
  retailPrice: '$53.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Eyedia Precise Monthly Astig 6pk',
  wholesalePrice: '$39.25',
  retailPrice: '$62.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Eyedia Soft 55 6 Pack',
  wholesalePrice: '$14.50',
  retailPrice: '$29.99',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Eyedia Soft 58 6 Pack',
  wholesalePrice: '$14.50',
  retailPrice: '$29.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biofinity Energys 6pk',
  wholesalePrice: '$30.00',
  retailPrice: '$60.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biofinity EW 6 Pack',
  wholesalePrice: '$25.75',
  retailPrice: '$47.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biofinity Multifocal 6 pack',
  wholesalePrice: '$46.00',
  retailPrice: '$84.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biofinity Toric 6 Pack',
  wholesalePrice: '$35.75',
  retailPrice: '$67.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biofinity XR 6 Pack',
  wholesalePrice: '$32.00',
  retailPrice: '$59.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biofinity XR Toric 6 Pack',
  wholesalePrice: '$78.99',
  retailPrice: '$137.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Expressions 6 Pack',
  wholesalePrice: '$44.00',
  retailPrice: '$76.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Frequency 55 Aspheric 6 Pack',
  wholesalePrice: '$21.50',
  retailPrice: '$50.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Frequency 55 Toric 6 Pack',
  wholesalePrice: '$47.25',
  retailPrice: '$89.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Frequency 55 Toric XR 6 Pack',
  wholesalePrice: '$82.00',
  retailPrice: '$139.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear Compatibles 6 Pack',
  wholesalePrice: '$31.00',
  retailPrice: '$59.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear Multifocal 6 Pack',
  wholesalePrice: '$43.00',
  retailPrice: '$106.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear Toric 6 Pack',
  wholesalePrice: '$37.00',
  retailPrice: '$89.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear Toric XR 6 Pack',
  wholesalePrice: '$75.00',
  retailPrice: '$136.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Vita 12pk',
  wholesalePrice: '$55.99',
  retailPrice: '$107.00',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Vita 6Pk',
  wholesalePrice: '$34.50',
  retailPrice: '$57.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O 54% 12 Pack',
  wholesalePrice: '$31.95',
  retailPrice: '$54.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O 54% 6 Pack',
  wholesalePrice: '$19.50',
  retailPrice: '$42.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O 54% Toric 6 Pack',
  wholesalePrice: '$26.95',
  retailPrice: '$49.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O 59% Thin 6 Pack',
  wholesalePrice: '$22.50',
  retailPrice: '$49.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O 59% Xtra 6 Pack',
  wholesalePrice: '$22.50',
  retailPrice: '$49.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O Monthly 12 Pack',
  wholesalePrice: '$41.95',
  retailPrice: '$72.99',
}, {
  manufacturer: 'X-Cel Specialty Cont',
  brandName: 'Extreme H2O Monthly 6pk',
  wholesalePrice: '$28.95',
  retailPrice: '$53.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies AC Plus Multifocal 30 Pack',
  wholesalePrice: '$24.00',
  retailPrice: '$38.00',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies AC Plus Multifocal 90 Pack',
  wholesalePrice: '$59.00',
  retailPrice: '$88.00',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Aqua Comfort Plus 30 pack',
  wholesalePrice: '$15.30',
  retailPrice: '$30.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Aqua Comfort Plus 90 pack',
  wholesalePrice: '$38.20',
  retailPrice: '$65.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Aqua Comfort Plus Toric 30pk',
  wholesalePrice: '$21.00',
  retailPrice: '$33.50',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Aqua Comfort Plus Toric 90pk',
  wholesalePrice: '$53.75',
  retailPrice: '$78.00',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Focus 30 Pack',
  wholesalePrice: '$10.65',
  retailPrice: '$24.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Focus 90 Pack',
  wholesalePrice: '$23.85',
  retailPrice: '$48.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Total 1 30 Pack',
  wholesalePrice: '$25.00',
  retailPrice: '$38.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Total 1 90 Pack',
  wholesalePrice: '$65.00',
  retailPrice: '$94.00',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Total 1 Multifocal 30pk',
  wholesalePrice: '$32.50',
  retailPrice: '$49.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Dailies Total 1 Multifocal 90pk',
  wholesalePrice: '$84.50',
  retailPrice: '$125.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Focus Dailies Toric 30 Pack',
  wholesalePrice: '$24.15',
  retailPrice: '$42.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Focus Dailies Toric 90 Pack',
  wholesalePrice: '$61.80',
  retailPrice: '$95.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'FreshLook One-Day 10 pack',
  wholesalePrice: '$11.45',
  retailPrice: '$18.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Biotrue ONEday 30 pack',
  wholesalePrice: '$18.20',
  retailPrice: '$34.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Biotrue ONEday 90 pack',
  wholesalePrice: '$35.00',
  retailPrice: '$57.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Biotrue ONEday for Presbyopia 30pk',
  wholesalePrice: '$20.00',
  retailPrice: '$34.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Biotrue ONEday for Presbyopia 90pk',
  wholesalePrice: '$57.00',
  retailPrice: '$94.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Clariti 1 Day Toric 30pk',
  wholesalePrice: '$20.00',
  retailPrice: '$30.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Clariti 1Day 90 Pack',
  wholesalePrice: '$36.50',
  retailPrice: '$64.00',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Clariti 1Day Multifocal 30 Pack',
  wholesalePrice: '$21.00',
  retailPrice: 'N/A',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Clariti 1Day Multifocal 90 Pack',
  wholesalePrice: '$59.00',
  retailPrice: '$87.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'ClearSight 1 Day Toric 30 Pack',
  wholesalePrice: '$25.50',
  retailPrice: '$55.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'ClearSight 1-Day 90 Pack',
  wholesalePrice: '$34.00',
  retailPrice: '$69.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'MyDay 90 pack',
  wholesalePrice: '$41.25',
  retailPrice: '$84.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear 1 Day 30 Pack',
  wholesalePrice: '$19.00',
  retailPrice: '$34.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear 1 Day 90 Pack',
  wholesalePrice: '$34.00',
  retailPrice: '$72.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear 1 Day Multifocal 30 Pack',
  wholesalePrice: '$22.00',
  retailPrice: '$47.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Proclear 1 Day Multifocal 90 Pack',
  wholesalePrice: '$59.00',
  retailPrice: '$98.99',
}, {
  manufacturer: 'Menicon America, In',
  brandName: 'MIRU 30 Pack',
  wholesalePrice: '$27.00',
  retailPrice: '$39.99',
}, {
  manufacturer: 'Menicon America, In',
  brandName: 'MIRU 90 Pack',
  wholesalePrice: '$57.00',
  retailPrice: '$79.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1 Day Acuvue Moist Multifocal 30pk',
  wholesalePrice: '$33.50',
  retailPrice: '$45.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1 Day Acuvue Moist Multifocal 90pk',
  wholesalePrice: '$66.25',
  retailPrice: '$99.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue 30 pack',
  wholesalePrice: '$24.99',
  retailPrice: '$38.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue Define 30pk',
  wholesalePrice: '$25.99',
  retailPrice: '$39.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue Define 90pk',
  wholesalePrice: '$60.50',
  retailPrice: '$93.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue Moist 30 Pack',
  wholesalePrice: '$20.75',
  retailPrice: '$33.00',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue Moist 90 Pack',
  wholesalePrice: '$40.06',
  retailPrice: '$72.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue Moist For Astig 30pk',
  wholesalePrice: '$26.25',
  retailPrice: '$35.88',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue Moist For Astig 90pk',
  wholesalePrice: '$60.50',
  retailPrice: '$85.88',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue TruEye Nara A 30pk',
  wholesalePrice: '$27.99',
  retailPrice: '$36.88',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: '1-Day Acuvue TruEye Nara A 90 Pack',
  wholesalePrice: '$54.75',
  retailPrice: '$83.88',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Oasys HydraLuxe 1-Day 90pk',
  wholesalePrice: '$62.50',
  retailPrice: '$88.88',
}, {
  manufacturer: 'ClearLab US',
  brandName: 'Eyedia Fresh Daily Disposables 90pk',
  wholesalePrice: '$38.99',
  retailPrice: '$69.99',
}, {
  manufacturer: 'X-Cel Contacts',
  brandName: 'Extreme H2O Daily 30pk',
  wholesalePrice: '$19.99',
  retailPrice: '$39.88',
}, {
  manufacturer: 'X-Cel Contacts',
  brandName: 'Extreme H2O Daily 90pk',
  wholesalePrice: '$47.99',
  retailPrice: '$72.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Soflens Daily Disp for Astig 30 pack',
  wholesalePrice: '$16.99',
  retailPrice: '$31.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Soflens Daily Disposable 90 pack',
  wholesalePrice: '$35.50',
  retailPrice: '$52.99',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'FreshLook ColorBlends 6 pack',
  wholesalePrice: '$35.70',
  retailPrice: '$55.88',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'FreshLook Colors(Opaque) 6 Pack',
  wholesalePrice: '$35.70',
  retailPrice: '$55.88',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Optima 38/SP',
  wholesalePrice: '$39.25',
  retailPrice: '$49.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'SofLens 38 6 pack',
  wholesalePrice: '$16.75',
  retailPrice: '$27.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'SofLens Multi-Focal 6 pack',
  wholesalePrice: '$41.30',
  retailPrice: '$59.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'SofLens Toric 6 pack',
  wholesalePrice: '$26.60',
  retailPrice: '$45.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Avaira 6 Pack',
  wholesalePrice: '$16.50',
  retailPrice: '$34.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Avaira Toric 6 Pack',
  wholesalePrice: '$23.25',
  retailPrice: '$48.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Avaira Vitality 6pk',
  wholesalePrice: '$16.50',
  retailPrice: '$32.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biomedics 55 Premier 6 Pack',
  wholesalePrice: '$18.50',
  retailPrice: '$29.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biomedics Toric 6 Pack',
  wholesalePrice: '$24.00',
  retailPrice: '$39.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Biomedics XC 6 Pack',
  wholesalePrice: '$19.75',
  retailPrice: '$37.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Vertex Toric 6 Pack',
  wholesalePrice: '$24.00',
  retailPrice: '$59.99',
}, {
  manufacturer: 'Cooper Vision',
  brandName: 'Vertex Toric XR 6 Pack',
  wholesalePrice: '$69.00',
  retailPrice: '$131.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue 2 6 pack',
  wholesalePrice: '$16.85',
  retailPrice: '$27.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Oasys 12 Pack',
  wholesalePrice: '$41.13',
  retailPrice: '$69.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Oasys 24 pack',
  wholesalePrice: '$65.17',
  retailPrice: '$139.99',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Oasys 54pk-1wk Overnight Us',
  wholesalePrice: '$129.25',
  retailPrice: '$218.88',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Oasys For Astigmatism 6 pack',
  wholesalePrice: '$25.25',
  retailPrice: '$49.88',
}, {
  manufacturer: 'Vistakon - Johnson',
  brandName: 'Acuvue Oasys For Presbyopia 6 Pack',
  wholesalePrice: '$28.50',
  retailPrice: '$50.88',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Silsoft Single Vial',
  wholesalePrice: '$153.00',
  retailPrice: '$250.88',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Silsoft Super Plus Single Vial',
  wholesalePrice: '$153.00',
  retailPrice: '$250.88',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Optima Toric 2 pack MTO',
  wholesalePrice: '$159.00',
  retailPrice: '$299.99',
}, {
  manufacturer: 'Bausch and Lomb',
  brandName: 'Optima Toric MTO',
  wholesalePrice: '$92.25',
  retailPrice: '$299.99',
}];

contacts.forEach(({ manufacturer, brandName, wholesalePrice, retailPrice }) => {
  const contactExists = Contacts.findOne({ brandName });
  if (!contactExists) Contacts.insert({ manufacturer, brandName, wholesalePrice, retailPrice });
});

const solutions = [{
  manufacturer: 'Alcon Laboratories Inc',
  brandName: 'Clear Care Pro 16oz',
  wholesalePrice: '$6.99',
  retailPrice: '$17.99',
}, {
  manufacturer: 'Alcon Laboratories Inc',
  brandName: 'Opti-Free Pro Lub Eye Drops 10ml',
  wholesalePrice: '$8.70',
  retailPrice: '$13.99',
}, {
  manufacturer: 'Alcon Laboratories Inc',
  brandName: 'Opti-Free Pro MPDS 16oz',
  wholesalePrice: '$9.99',
  retailPrice: '$13.99',
}, {
  manufacturer: 'Alcon Laboratories Inc',
  brandName: 'Opti-free Pro MPDS 2oz',
  wholesalePrice: '$1.47',
  retailPrice: '$6.99',
}, {
  manufacturer: 'Alcon Laboratories Inc',
  brandName: 'Opti-Free Puremoist Rwtng Drop 12ml',
  wholesalePrice: '$5.30',
  retailPrice: '$12.50',
}, {
  manufacturer: 'Alcon - Ciba Vision',
  brandName: 'Optifree Lens Solution',
  wholesalePrice: '$10.00',
  retailPrice: '$15.00',
}, {
  manufacturer: 'Bausch + Lomb',
  brandName: 'Renu Lens Solution',
  wholesalePrice: '$8.50',
  retailPrice: '$12.50',
}, {
  manufacturer: 'Bausch + Lomb',
  brandName: 'Renu Refresh Solution',
  wholesalePrice: '$11.25',
  retailPrice: '$16.99',
}];

solutions.forEach(({ manufacturer, brandName, wholesalePrice, retailPrice }) => {
  const solutionExists = Solutions.findOne({ brandName });
  if (!solutionExists) Solutions.insert({ manufacturer, brandName, wholesalePrice, retailPrice });
});

const discounts = [{
  discountCode: 'DCL25OFF',
  startDate: 'May 1, 2017',
  endDate: 'June 1, 2017',
  discountAmount: '$25',
  minimumSpend: '$100',
  discountType: 'Multiple Uses',
  uses: '294',
}, {
  discountCode: 'DCL20OFF',
  startDate: 'April 1, 2017',
  endDate: 'August 1, 2017',
  discountAmount: '$20',
  minimumSpend: '$100',
  discountType: 'Multiple Uses',
  uses: '469',
}, {
  discountCode: 'DCL15OFF',
  startDate: 'April 1, 2017',
  endDate: 'August 1, 2017',
  discountAmount: '$15',
  minimumSpend: '$100',
  discountType: 'Multiple Uses',
  uses: '573',
}, {
  discountCode: 'DCL30OFF',
  startDate: 'May 1, 2017',
  endDate: 'September 1, 2017',
  discountAmount: '$30',
  minimumSpend: '$100',
  discountType: 'Single Use',
  uses: '724',
}, {
  discountCode: 'DCL10OFF',
  startDate: 'January 1, 2017',
  endDate: 'January 1, 2018',
  discountAmount: '$10',
  minimumSpend: '$100',
  discountType: 'Multiple Uses',
  uses: '472',
}, {
  discountCode: 'DCL50OFF',
  startDate: 'February 1, 2017',
  endDate: 'June 1, 2017',
  discountAmount: '$50',
  minimumSpend: '$250',
  discountType: 'Single Use',
  uses: '1185',
}, {
  discountCode: 'DCL75OFF',
  startDate: 'March 1, 2017',
  endDate: 'July 1, 2017',
  discountAmount: '$75',
  minimumSpend: '$300',
  discountType: 'Multiple Uses',
  uses: '1343',
}, {
  discountCode: 'DCL100OFF',
  startDate: 'March 1, 2017',
  endDate: 'July 1, 2017',
  discountAmount: '$100',
  minimumSpend: '$500',
  discountType: 'Multiple Uses',
  uses: '1683',
}, {
  discountCode: 'DCL25WINTER',
  startDate: 'December 1, 2016',
  endDate: 'January 30, 2017',
  discountAmount: '$25',
  minimumSpend: '$125',
  discountType: 'Multiple Uses',
  uses: '1253',
}, {
  discountCode: 'DCL20SPRING',
  startDate: 'February 1, 2017',
  endDate: 'May 1, 2017',
  discountAmount: '$20',
  minimumSpend: '$100',
  discountType: 'Single Use',
  uses: '957',
}, {
  discountCode: 'DCL25SUMMER',
  startDate: 'May 1, 2016',
  endDate: 'August 1, 2016',
  discountAmount: '$25',
  minimumSpend: '$150',
  discountType: 'Multiple Uses',
  uses: '1267',
}];

discounts.forEach(({ discountCode,
                     startDate,
                     endDate,
                     discountAmount,
                     minimumSpend,
                     discountType,
                     uses }) => {
  const discountExists = Discounts.findOne({ discountCode });
  if (!discountExists) {
    Discounts.insert({ discountCode,
      startDate,
      endDate,
      discountAmount,
      minimumSpend,
      discountType,
      uses });
  }
});
