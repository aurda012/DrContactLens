import mandrill from 'mandrill-api';
import { Meteor } from 'meteor/meteor';

const settings = Meteor.settings.private.mandrill;
const mandrillClient = new mandrill.Mandrill(settings.apiKey);

const sendEmail = (template, { templateContent, to, replyTo, subject, attachments, send_at }) => {
  mandrillClient.messages.sendTemplate({
    template_name: template,
    template_content: [templateContent],
    message: {
      from_email: 'support@drcontactlens.com',
      from_name: 'Dr. Contact Lens',
      to: [{
        email: to,
        type: 'to',
      }],
      subject,
      headers: {
        'Reply-To': replyTo,
      },
    },
    send_at,
  });
};

const notifications = {
  doctorWelcome({ to }) {
    sendEmail('doctor-welcome', {
      to,
      replyTo: 'support@drcontactlens.com',
      subject: 'Welcome to Dr. Contact Lens',
    });
  },
  pendingOrderPlaced({ to }) {
    sendEmail('pending-order-placed', {
      to,
      replyTo: 'support@drcontactlens.com',
      subject: 'A pending order has been placed!',
    });
  },
  orderVerification({ to, id }) {
    sendEmail('order-verification', {
      templateContent: {
        name: 'header',
        content: `<a class="mcnButton" title="Verify Account" href="https://portal.drcontactlens.com/checkout/${id}" target="_self" style="font-weight: bold;letter-spacing: -0.5px;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">Verify Account</a>`,
      },
      to,
      replyTo: 'support@drcontactlens.com',
      subject: 'A pending order has been placed!',
    });
  },
  orderPlaced({ to }) {
    sendEmail('order-placed-no-insurance', {
      to,
      replyTo: 'support@drcontactlens.com',
      subject: 'An order has been placed!',
    });
  },
  prescriptionRenewal({ to, send_at }) {
    sendEmail('doctor-welcome', {
      to,
      replyTo: 'support@drcontactlens.com',
      subject: 'Welcome to Dr. Contact Lens',
      send_at,
    });
    // momemnt(<date when you want to send email>).format(); // ISO-8601 string.
  },
};

export default function (type, payload) {
  const notification = notifications[type];
  if (notification) {
    notification(payload);
  } else {
    throw new Meteor.Error('500', 'Sorry, that notification does not exist.');
  }
}

