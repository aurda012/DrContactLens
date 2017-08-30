import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Orders from '../../api/orders/orders';
import { Bar, Line } from 'react-chartjs-2';

const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';
const brandYellow =   '#ff00ff';

// Main Chart

// convert Hex to RGBA
function convertHex(hex,opacity) {
  hex = hex.replace('#','');
  var r = parseInt(hex.substring(0,2), 16);
  var g = parseInt(hex.substring(2,4), 16);
  var b = parseInt(hex.substring(4,6), 16);

  var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

//Random Numbers
function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];
//
// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 10000));
//   data2.push(random(80, 8000));
//   data3.push(random(60, 10000));
// }

const mainChart = (data1) => ({
  labels: ['Sales Today', 'Sales This Week', 'Sales This Month', 'Total Sales'],
  datasets: [
    {
      label: 'Total Sales',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
  ]
});

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(5000 / 10),
        max: 5000,
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

class DoctorSalesReports extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    const { orders } = this.props;

    // var sum = orders.orderTotal.reduce(add, 0);

    console.log(orders);

    function add(a, b) {
      return a + b;
    }

    const data = [323, 753, 1356, 4263];

    return (
      <div className="animated fadeIn">

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 style={{ margin: '5px' }}><strong>Sales Report</strong></h4>
              </div>
              <div className="col-md-12">
                <div className="chart-wrapper" style={{ height: 600 + 'px', marginTop: 40 + 'px', marginBottom: 40 + 'px' }}>
                  <Bar data={mainChart(orders)} options={mainChartOpts} height={600}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DoctorSalesReports.propTypes = {
  orders: PropTypes.array,
};

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('orders');
  if (subscription.ready()) {
    const orders = Orders.find({ doctorId: Meteor.userId() }, { orderTotal: 1 }).fetch();
    onData(null, { orders });
  }
};

export default composeWithTracker(composer)(DoctorSalesReports);
