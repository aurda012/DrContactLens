import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

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

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50,200));
  data2.push(random(80,100));
  data3.push(65);
}

const mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo,10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
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
        stepSize: Math.ceil(250 / 5),
        max: 250
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

class SalesReports extends Component {

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
    return (
      <div className="animated fadeIn">

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Traffic &amp; Sales
              </div>
              <div className="col-md-12">
                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                  <Line data={mainChart} options={mainChartOpts} height={300}/>
                </div>
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="callout callout-info">
                          <small className="text-muted">New Clients</small><br/>
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Recuring Clients</small><br/>
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-2" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars">
                      <li>
                        <div className="title">
                          Monday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="34" />
                          <Progress className="progress-xs" color="danger" value="78" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Tuesday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="56" />
                          <Progress className="progress-xs" color="danger" value="94" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Wednesday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="12" />
                          <Progress className="progress-xs" color="danger" value="67" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Thursday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="43" />
                          <Progress className="progress-xs" color="danger" value="91" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Friday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="22" />
                          <Progress className="progress-xs" color="danger" value="73" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Saturday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="53" />
                          <Progress className="progress-xs" color="danger" value="82" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Sunday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9" />
                          <Progress className="progress-xs" color="danger" value="69" />
                        </div>
                      </li>
                      <li className="legend">
                        <span className="badge badge-pill badge-info"></span> <small>New clients</small> &nbsp; <span className="badge badge-pill badge-danger"></span> <small>Recurring clients</small>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Pageviews</small><br/>
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-3" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="callout callout-success">
                          <small className="text-muted">Organic</small><br/>
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-4" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="icon-user"></i>
                        <span className="title">Male</span>
                        <span className="value">43%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="43" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Female</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="37" />
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <i className="icon-globe"></i>
                        <span className="title">Organic Search</span>
                        <span className="value">191,235 <span className="text-muted small">(56%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-facebook"></i>
                        <span className="title">Facebook</span>
                        <span className="value">51,223 <span className="text-muted small">(15%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="15" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-twitter"></i>
                        <span className="title">Twitter</span>
                        <span className="value">37,564 <span className="text-muted small">(11%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="11" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-linkedin"></i>
                        <span className="title">LinkedIn</span>
                        <span className="value">27,319 <span className="text-muted small">(8%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="8" />
                        </div>
                      </li>
                      <li className="divider text-center">
                        <button type="button" className="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="show more"><i className="icon-options"></i></button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="callout">
                          <small className="text-muted">CTR</small><br/>
                          <strong className="h4">23%</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-5" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small><br/>
                          <strong className="h4">5%</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-6" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-0"/>
                    <ul className="icons-list">
                      <li>
                        <i className="icon-screen-desktop bg-primary"></i>
                        <div className="desc">
                          <div className="title">iMac 4k</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.924</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-info"></i>
                        <div className="desc">
                          <div className="title">Samsung Galaxy Edge</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.224</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-warning"></i>
                        <div className="desc">
                          <div className="title">iPhone 6S</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.163</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user bg-danger"></i>
                        <div className="desc">
                          <div className="title">Premium accounts</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>928</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-spotify bg-success"></i>
                        <div className="desc">
                          <div className="title">Spotify Subscriptions</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>893</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-cloud-download bg-danger"></i>
                        <div className="desc">
                          <div className="title">Ebook</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Downloads</div>
                          <strong>121.924</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning"></i>
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li className="divider text-center">
                        <button type="button" className="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="show more"><i className="icon-options"></i></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SalesReports;
