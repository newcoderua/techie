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
      //check how amazon search works/API

      let currentUserButton;
      if (this.props.currentUser === null) {
        currentUserButton = 'LogIn'
      } else {
        currentUserButton = 'LogOut';
      }

      let name;
      if (this.props.currentUser !== null) {
        name = this.props.currentUser.username;
      } else {
        name = '';
      }
      this.state = {
        isOpen: false,
        currentUserButtonName: currentUserButton,
        modal: false,
        currentUser : name
      };
      // debugger

      this.toggle = this.toggle.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.updateName = this.updateName.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      // debugger
      let logoutStr = 'LogOut';
      if (this.state.modal === true) {
        this.setState({ currentUserButtonName : logoutStr })
        }
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

    updateName(param) {
      this.setState({ currentUser : param })
    }

    handleLogout() {
      this.props.logout();
      this.setState({ currentUserButtonName : 'LogIn' })
    }

    render() {
      let loginLogoutButton = () => {
        if (this.state.currentUserButtonName !== 'LogIn') {
          return(
            <div>
              <Button color="warning" onClick={this.handleLogout}>
                {this.state.currentUserButtonName}
              </Button>{' '}
              Hi, {this.state.currentUser}
          </div>
          )
        } else {
          return(
            <Button color="warning" onClick={this.toggleModal}>
              {this.state.currentUserButtonName}
            </Button>
          )
        }
      }

      return (
        <div className='header'>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Techie</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {loginLogoutButton()}
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}></ModalHeader>
                    <ModalBody>
                      <Session closeModal={this.toggleModal} loginButton={this.state.currentUserButtonName} updateName={this.updateName}/>
                    </ModalBody>
                  </Modal>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  // <ModalFooter>
  //   <Button color="primary" onClick={this.toggleModal}>Submit</Button>{' '}
  //   <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
  // </ModalFooter>
