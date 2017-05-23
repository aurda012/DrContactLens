import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Discounts from './discounts';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDiscount = new ValidatedMethod({
  name: 'discounts.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    discountCode: { type: String, optional: true },
    startDate: { type: String, optional: true },
    endDate: { type: String, optional: true },
    discountAmount: { type: String, optional: true },
    minimumSpend: { type: String, optional: true },
    discountType: { type: String, optional: true },
    uses: { type: String, optional: true },
  }).validator(),
  run(discount) {
    return Discounts.upsert({ _id: discount._id }, { $set: discount });
  },
});

export const removeDiscount = new ValidatedMethod({
  name: 'discounts.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Discounts.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertDiscount,
    removeDiscount,
  ],
  limit: 5,
  timeRange: 1000,
});
