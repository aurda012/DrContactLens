import React from 'react';
import PendingOrdersTable from '../components/Tables/PendingOrdersTable';

const PendingOrders = ({ modal }) => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 style={{ margin: '5px' }}><strong>Pending Orders</strong></h4>
          </div>
          <div className="card-block">
            <PendingOrdersTable style={{ margin: '0' }} modal={modal} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PendingOrders;
