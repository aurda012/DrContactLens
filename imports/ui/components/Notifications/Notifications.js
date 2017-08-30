import { Meteor } from 'meteor/meteor';
import { React } from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import { composeWithTracker } from 'react-komposer';
import PropTypes from 'prop-types';
import NotificationsCollection from '../../../api/notifications/notifications';

const Notifications = ({ notifications }) => (
  <DropdownMenu>
    {notifications.map(({ message }) => {
      return (<DropdownItem>{message}</DropdownItem>);
    })}
  </DropdownMenu>
);

Notifications.propTypes = {
  notifications: PropTypes.array,
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('notifications');
  if (subscription.ready()) {
    const notifications = NotificationsCollection.find().fetch();
    console.log(notifications);
    onData(null, { notifications });
  }
};

export default composeWithTracker(composer)(Notifications);
