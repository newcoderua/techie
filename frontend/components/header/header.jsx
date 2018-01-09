import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';
import Session from '../session/session_container';

  export default class Header extends React.Component {
    constructor(props) {
      super(props);
      // debugger
      let currentUserButton;
      if (this.props.currentUser === null) {
        currentUserButton = 'LogIn'
      } else {
        currentUserButton = 'LogOut';
      }

      this.state = {
        isOpen: false,
        currentUser: currentUserButton,
        modal: false
      };

      this.toggle = this.toggle.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
    }


    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    toggleModal() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render() {
      return (
        <div className='header'>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Techie</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/gadgets/">
                    <Button color="primary">
                      My gadgets
                    </Button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button color="warning" onClick={this.toggleModal}>
                    {this.state.currentUser}
                  </Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}></ModalHeader>
                    <ModalBody>
                      <Session />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
                      <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
