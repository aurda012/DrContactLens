import React, { Component } from 'react';

class Orders extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Users
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                  <tr>
                    <th>Order Date</th>
                    <th>Patient Name</th>
                    <th>Prescription</th>
                    <th>Brand</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Approval Status</th>
                    <th>Manage</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>May 14, 2017</td>
                    <td>Stuart Murphy</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>DAILIES AquaComfort Plus 90 pack</td>
                    <td>4 Boxes</td>
                    <td>$269.50</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 12, 2017</td>
                    <td>Kevin Williams</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Air Optix Aqua</td>
                    <td>5 Boxes</td>
                    <td>$355.00</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 11, 2017</td>
                    <td>Karen Rodriguez</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Biomedics EP (Proclear EP)</td>
                    <td>3 Boxes</td>
                    <td>$205.25</td>
                    <td>
                      <span className="badge badge-info">Pending</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 10, 2017</td>
                    <td>Sandra Johnson</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Biofinity XR Toxic</td>
                    <td>1 Box</td>
                    <td>$69.50</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 9, 2017</td>
                    <td>Mike Jones</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>PureVision Tonic</td>
                    <td>4 Boxes</td>
                    <td>$275.30</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 8, 2017</td>
                    <td>David Smith</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Freshlook Colorblends</td>
                    <td>2 Boxes</td>
                    <td>$135.75</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 7, 2017</td>
                    <td>Maria Brown</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>PureVision Multi-Focal</td>
                    <td>2 Boxes</td>
                    <td>$147.50</td>
                    <td>
                      <span className="badge badge-info">Pending</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 6, 2017</td>
                    <td>Charles White</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Biofinity Multi-Focal</td>
                    <td>6 Boxes</td>
                    <td>$454.545</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 3, 2017</td>
                    <td>Steven Moore</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Air Optix Night & Day Aqua</td>
                    <td>2 Boxes</td>
                    <td>$159.50</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 1, 2017</td>
                    <td>Brian Scott</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Proclear 1-Day Multifocal 30 pack</td>
                    <td>4 Boxes</td>
                    <td>$269.50</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  <tr>
                    <td>May 1, 2017</td>
                    <td>George Lewis</td>
                    <td><i className="fa fa-address-card-o"></i></td>
                    <td>Bimedics EP (Proclear EP)</td>
                    <td>2 Boxes</td>
                    <td>$145.75</td>
                    <td>
                      <span className="badge badge-success">Approved</span>
                    </td>
                    <td>
                      <span className="btn btn-info">View</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Orders;
