import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('users', function users() {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    return [
      Meteor.users.find({}, { fields: { emails: 1, profile: 1, roles: 1 } }),
    ];
  }

  return this.ready();
});

Meteor.publish('users.roles', () => Roles.getAllRoles());
