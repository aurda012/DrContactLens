import React, { Component } from 'react';
import HeaderDoctor from '../../components/Headers/HeaderDoctor';
import SidebarDoctor from '../../components/Sidebars/SidebarDoctor';
import Footer from '../../components/Footers/Footer';
import modals from '../../../modules/modals';
import Modal from '../../components/Modals/Modal';

export default class PortalDoctor extends Component {
  constructor(props) {
    super(props);
    const component = this;

    component.state = {
      modalShow: false,
      modalClasses: null,
      modalTitle: null,
      modalForm: null,
      modalBody: null,
      modalFooter: null,
    };

    component.modal = {
      open(modal, modalProps) {
        component.setModal({ modal, show: true, props: modalProps });
      },
      close() {
        component.setModal({ show: false });
      },
    };

    component.resetModal = component.resetModal.bind(component);
    component.setModal = component.setModal.bind(component);
  }

  resetModal() {
    this.setState({
      modalClasses: null,
      modalTitle: null,
      modalForm: null,
      modalBody: null,
      modalFooter: null,
    });
  }

  setModal({ modal, show, props }) {
    const modalToSet = modal ? modals[modal](props, this.modal) : {};
    this.setState(Object.assign({ modalShow: show }, modalToSet), () => {
      if (!show) setTimeout(() => { this.resetModal(); }, 300);
    });
  }

  render() {
    const {
      modalShow,
      modalClasses,
      modalTitle,
      modalForm,
      modalBody,
      modalFooter,
    } = this.state;

    return (
      <div className="app">
        <HeaderDoctor />
        <div className="app-body">
          <SidebarDoctor {...this.props}/>
          <main className="main">
            <div className="container-fluid card-margin">
              { React.cloneElement(this.props.children, { modal: this.modal }) }
            </div>
          </main>
        </div>
        <Footer />
        <Modal
          show={ modalShow }
          className={ modalClasses }
          title={ modalTitle }
          form={ modalForm }
          body={ modalBody }
          footer={ modalFooter }
          onHide={ this.modal.close }
        />
      </div>
    );
  }
}

PortalDoctor.propTypes = {
  children: React.PropTypes.node,
};
