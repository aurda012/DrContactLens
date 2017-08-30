import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Discounts from '../../api/discounts/discounts';
import DiscountEditor from '../components/Editors/DiscountEditor';
import NotFound from './NotFound';

const EditDiscount = ({ doc }) => (doc ? (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Edit Discount</strong></h4>
          </div>
          <div className="card-block">
            <h4 className="page-header">Editing "{ doc.discountCode }"</h4>
            <DiscountEditor />
          </div>
        </div>
      </div>
    </div>
  </div>
) : <NotFound />);

EditDiscount.propTypes = {
  doc: PropTypes.object,
};

const composer = (props, onData) => {
  const discountId = props.params._id;
  const subscription = Meteor.subscribe('discounts.view', discountId);

  if (subscription.ready()) {
    const doc = Discounts.findOne(discountId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer)(EditDiscount);
