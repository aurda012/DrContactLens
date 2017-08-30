import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Orders from '../../api/orders/orders';
import moment from 'moment';
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

function optimalMaxValue(maxValue, mostTicks) {
  const minimum = maxValue / mostTicks;
  const magnitude = Math.pow(10, Math.floor(Math.log(minimum) / Math.log(10)));
  const residual = minimum / magnitude;
  let tick;
  if (residual > 5) {
    tick = 10 * magnitude;
  } else if (residual > 2) {
    tick = 5 * magnitude;
  } else if (residual > 1) {
    tick = 2 * magnitude;
  } else {
    tick = magnitude;
  }
  return (tick * mostTicks);
}

function optimalScale(range) {
  let optimalMax = range * 2;
  let optimalTicks;
  for (let i = 5; i <= 10; i += 1) {
    const tmpMaxValue = optimalMaxValue(range, i);
    if ((optimalMax > tmpMaxValue) && (tmpMaxValue > (range + (range * 0.05) ))) {
      optimalMax = tmpMaxValue;
      optimalTicks = i;
    }
  }
  return {
    optimalMax,
    optimalStep: optimalMax / optimalTicks,
  };
}

const mainChart = (data1) => ({
  labels: ['Sales Today', 'Sales This Week', 'Sales This Month', 'Total Sales'],
  datasets: [
    {
      label: 'Total Sales',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [data1.today, data1.week, data1.month, data1.total],
    },
  ]
});

const mainChartOpts = (data1) => {
  const max = Math.max(
    data1.today, data1.week, data1.month, data1.total
  )
  const optiScale = optimalScale(max);
  return {
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
          stepSize: optiScale.optimalStep,
          max: optiScale.optimalMax,
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

    function add(a, b) {
      return a + b;
    }

    const chartData = {
      today: orders.reduce((prev, cur) => {
        if (
          moment(cur.createdAt)
            .startOf('day')
            .diff(
              moment().startOf('day'), 'seconds'
            ) >= 0
        ) {
          return prev + cur.orderTotal;
        }
        return prev;
      }, 0),
      week: orders.reduce((prev, cur) => {
        if (
          moment(cur.createdAt)
            .startOf('week')
            .diff(
              moment().startOf('week'), 'seconds'
            ) >= 0
        ) {
          return prev + cur.orderTotal;
        }
        return prev;
      }, 0),
      month: orders.reduce((prev, cur) => {
        if (
          moment(cur.createdAt)
            .startOf('month')
            .diff(
              moment().startOf('month'), 'seconds'
            ) >= 0
        ) {
          return prev + cur.orderTotal;
        }
        return prev;
      }, 0),
      total: orders.reduce((prev, cur) => (
        prev + cur.orderTotal
      ), 0),
    }

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
                  <Bar data={mainChart(chartData)} options={mainChartOpts(chartData)} height={600}/>
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
