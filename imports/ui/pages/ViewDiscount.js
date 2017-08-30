/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Discounts from '../../api/discounts/discounts';
import { removeDiscount } from '../../api/discounts/methods';
import NotFound from './NotFound';

const handleEdit = (_id) => {
  browserHistory.push(`/admin/discounts/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeDiscount.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Discount deleted!', 'success');
        browserHistory.push('admin/discounts');
      }
    });
  }
};

const ViewDiscount = ({ doc }) => {
  return doc ? (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-offset-2 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 style={{ margin: '5px' }}><strong>{ doc.discountCode }</strong></h4>
            </div>
            <div className="card-block">
              <ul className="list-group">
                <li className="list-group-item"><strong>Discount Code: </strong>&nbsp;{ doc && doc.discountCode }</li>
                <li className="list-group-item"><strong>Start-Date: </strong>&nbsp;{ doc && doc.startDate }</li>
                <li className="list-group-item"><strong>End-Date: </strong>&nbsp;{ doc && doc.endDate }</li>
                <li className="list-group-item"><strong>Discount Amount: </strong>&nbsp;{ doc && doc.discountAmount }</li>
                <li className="list-group-item"><strong>Minimum Spend: </strong>&nbsp;{ doc && doc.minimumSpend }</li>
                <li className="list-group-item"><strong>Discount Type: </strong>&nbsp;{ doc && doc.discountType }</li>
                <li className="list-group-item"><strong>Uses: </strong>&nbsp;{ doc && doc.uses }</li>
              </ul>
              <ButtonGroup className="pull-right" bsSize="medium">
                <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
                <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <NotFound />;
};

ViewDiscount.propTypes = {
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

export default composeWithTracker(composer)(ViewDiscount);
