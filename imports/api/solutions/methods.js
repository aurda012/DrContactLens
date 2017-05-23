import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Solutions from './solutions';
import rateLimit from '../../modules/rate-limit.js';

export const upsertSolution = new ValidatedMethod({
  name: 'solutions.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    manufacturer: { type: String, optional: true },
    brandName: { type: String, optional: true },
    wholesalePrice: { type: String, optional: true },
    retailPrice: { type: String, optional: true },
  }).validator(),
  run(solution) {
    return Solutions.upsert({ _id: solution._id }, { $set: solution });
  },
});

export const removeSolution = new ValidatedMethod({
  name: 'solutions.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Solutions.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertSolution,
    removeSolution,
  ],
  limit: 5,
  timeRange: 1000,
});
