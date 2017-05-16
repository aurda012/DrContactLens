import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

import Header from '../components/Header';
import SidebarDoctor from '../components/SidebarDoctor';
import Footer from '../components/Footer';


class FullDoctor extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <SidebarDoctor {...this.props}/>
          <main className="main">
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb"
              itemClass="breadcrumb-item"
              separator=""
              routes={this.props.routes}
              params={this.props.params}
            />
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FullDoctor;

