import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Plans from '../../api/plans/plans';
import Solutions from '../../api/solutions/solutions';
import Discounts from '../../api/discounts/discounts';
import Catalog from '../../api/catalog/catalog';

const users = [{
    email: 'support@drcontactlens.com',
    password: 'Eyeloveyou1!',
    profile: {
      name: { first: 'Dr.', last: 'Contact' },
    },
    roles: ['admin'],
  },
  {
    email: 'brhue@hotmail.com',
    password: 'Eyeloveyou1!',
    profile: {
      name: { first: 'Brianna', last: 'Rhue' },
    },
    roles: ['doctor'],
  },
  {
    email: 'jtabiza@gmail.com',
    password: 'Eyeloveyou1!',
    profile: {
      name: { first: 'Jennifer', last: 'Tabiza' },
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
  planId: 'PortalYearly',
  label: 'Annually (Save $200/yr)',
  price: 100000,
}, {
  planId: 'PortalMonthly',
  label: 'Monthly',
  price: 10000,
}];

plans.forEach(({ planId, label, price }) => {
  const planExists = Plans.findOne({ planId });
  if (!planExists) Plans.insert({ planId, label, price });
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

const contacts = [{
  SER_ID: 'E55',
  MAN_NAME: 'ClearLab US',
  SER_NAME: 'Eyedia Soft 55 6 Pack',
  SER_DURATION: '',
  SER_RETAIL: '29.99',
  SER_WHOLESALE: '14.50',
  PRF_BASECURVE: [
    '8.6',
  ],
  PRF_DIAMETER: [
    '14.5',
  ],
  PRD_POWER: [
    '-12',
    '-11.5',
    '-11',
    '-10.5',
    '-10',
    '-9.5',
    '-9',
    '-8.5',
    '-8',
    '-7.5',
    '-7',
    '-6.5',
    '-6',
    '-5.75',
    '-5.5',
    '-5.25',
    '-5',
    '-4.75',
    '-4.5',
    '-4.25',
    '-4',
    '-3.75',
    '-3.5',
    '-3.25',
    '-3',
    '-2.75',
    '-2.5',
    '-2.25',
    '-2',
    '-1.75',
    '-1.5',
    '-1.25',
    '-1',
    '-0.75',
    '-0.5',
    '0.25',
    '0.5',
    '0.75',
    '1',
    '1.25',
    '1.5',
    '1.75',
    '2',
    '2.25',
    '2.5',
    '2.75',
    '3',
    '3.25',
    '3.5',
    '3.75',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
  ],
  PRD_COLOR: [
    'Clear',
  ],
  PRD_CYLINDER: [
    '0',
  ],
  PRD_AXIS: [
    '0',
  ],
  PRD_ADDITION: [
    '0',
  ],
}, {
  SER_ID: 'E58',
  MAN_NAME: 'ClearLab US',
  SER_NAME: 'Eyedia Soft 58 6 Pack',
  SER_DURATION: '',
  SER_RETAIL: '29.99',
  SER_WHOLESALE: '14.50',
  PRF_BASECURVE: [
    '8.2',
    '8.6',
  ],
  PRF_DIAMETER: [
    '14',
    '14.5',
  ],
  PRD_POWER: [
    '-10',
    '-9.5',
    '-9',
    '-8.5',
    '-8',
    '-7.5',
    '-7',
    '-6.5',
    '-6',
    '-5.75',
    '-5.5',
    '-5.25',
    '-5',
    '-4.75',
    '-4.5',
    '-4.25',
    '-4',
    '-3.75',
    '-3.5',
    '-3.25',
    '-3',
    '-2.75',
    '-2.5',
    '-2.25',
    '-2',
    '-1.75',
    '-1.5',
    '-1.25',
    '-1',
    '-0.75',
    '-0.5',
    '0.5',
    '0.75',
    '1',
    '1.25',
    '1.5',
    '1.75',
    '2',
    '2.25',
    '2.5',
    '2.75',
    '3',
    '3.25',
    '3.5',
    '3.75',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
  ],
  PRD_COLOR: [
    'Clear',
  ],
  PRD_CYLINDER: [
    '0',
  ],
  PRD_AXIS: [
    '0',
  ],
  PRD_ADDITION: [
    '0',
  ],
}, {
  SER_ID: 'EC6',
  MAN_NAME: 'ClearLab US',
  SER_NAME: 'Clearcolor Elements 6 Pack',
  SER_DURATION: '',
  SER_RETAIL: '53.99',
  SER_WHOLESALE: '30.99',
  PRF_BASECURVE: [
    '8.6',
  ],
  PRF_DIAMETER: [
    '14.5',
  ],
  PRD_POWER: [
    '-8',
    '-7.5',
    '-7',
    '-6.5',
    '-6',
    '-5.75',
    '-5.5',
    '-5.25',
    '-5',
    '-4.75',
    '-4.5',
    '-4.25',
    '-4',
    '-3.75',
    '-3.5',
    '-3.25',
    '-3',
    '-2.75',
    '-2.5',
    '-2.25',
    '-2',
    '-1.75',
    '-1.5',
    '-1.25',
    '-1',
    '-0.75',
    '-0.5',
    '-0.25',
    '0',
    '0.25',
    '0.5',
    '0.75',
    '1',
    '1.25',
    '1.5',
    '1.75',
    '2',
    '2.25',
    '2.5',
    '2.75',
    '3',
    '3.25',
    '3.5',
    '3.75',
    '4',
  ],
  PRD_COLOR: [
    'Blue Rain MB35',
    'Brown Chestnut MB34',
    'Green Envy MB32',
    'Hazel Autumn MB38',
    'Misty Gray MB37',
    'Platinum Gray MB36',
    'Sky Blue MB33',
    'Tosca MB39',
    'Violet Rose MB31',
  ],
  PRD_CYLINDER: [
    '0',
  ],
  PRD_AXIS: [
    '0',
  ],
  PRD_ADDITION: [
    '0',
  ],
}];

contacts.forEach(({ SER_ID,
                    MAN_NAME,
                    SER_NAME,
                    SER_DURATION,
                    SER_RETAIL,
                    SER_WHOLESALE,
                    PRF_BASECURVE,
                    PRF_DIAMETER,
                    PRD_POWER,
                    PRD_COLOR,
                    PRD_CYLINDER,
                    PRD_AXIS,
                    PRD_ADDITION }) => {
  const discountExists = Catalog.findOne({ SER_ID });
  if (!discountExists) {
    Catalog.insert({ SER_ID,
      MAN_NAME,
      SER_NAME,
      SER_DURATION,
      SER_RETAIL,
      SER_WHOLESALE,
      PRF_BASECURVE,
      PRF_DIAMETER,
      PRD_POWER,
      PRD_COLOR,
      PRD_CYLINDER,
      PRD_AXIS,
      PRD_ADDITION });
  }
});
