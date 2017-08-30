import React from 'react';
import OrderHistoryTable from '../components/Tables/OrderHistoryTable';

const OrderHistory = ({ modal }) => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Order History</strong></h4>
          </div>
          <div className="card-block">
            <OrderHistoryTable style={{ margin: '0' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderHistory;
