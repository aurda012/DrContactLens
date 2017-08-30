import fs from 'fs';
import { Meteor } from 'meteor/meteor';
import { SSR } from 'meteor/meteorhacks:ssr';

export default function (name) {
  try {
    return fs.readFileSync(`assets/app/email-templates/${name}.html`, 'utf8');
  } catch (exception) {
    throw new Meteor.Error('500', exception);
  }
}
