import React from 'react';
import { FormGroup, ControlLabel, Button, Modal } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';
import { Bert } from 'meteor/themeteorchef:bert';

export default class SendEmail extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage() {
    const message = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    Meteor.call('sendMessage', message, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        this.props.modal.close();
        Bert.alert('Message sent!', 'success');
      }
    });
  }

  componentDidMount() {
    const component = this;
    $(component.contactForm).validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
      },
      messages: {
        name: {
          required: 'Need to know who you are, skipper.',
        },
        email: {
          required: 'Need an email, champ.',
          email: 'Is this legit, friend?',
        },
        message: {
          required: 'Well you have to say something!',
        },
      },
      submitHandler() { component.handleSendMessage(); },
    });
  }

  render() {
    const { modal } = this.props;
    return (
      <div className="Index">
        <h4 className="page-header">Send Email!</h4>
        <form
          ref={contactForm => (this.contactForm = contactForm)}
          onSubmit={event => event.preventDefault()}
        >
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Your Name</ControlLabel>
              <input
                ref={name => (this.name = name)}
                type="text"
                name="name"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Your Email</ControlLabel>
              <input
                ref={email => (this.email = email)}
                type="email"
                name="email"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Your Message</ControlLabel>
              <textarea
                ref={message => (this.message = message)}
                name="message"
                className="form-control"
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ modal.close } bsStyle="default">Cancel</Button>
            <Button type="submit" bsStyle="success">Send Email</Button>
          </Modal.Footer>
        </form>
      </div>
    );
  }
}

SendEmail.propTypes = {
  modal: React.PropTypes.object,
};
