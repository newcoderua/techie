import React from 'react';
import { Nav, NavItem, NavLink, Button, Link } from 'reactstrap';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className='leftNav'>
        <p>Your Account</p>
        <Nav vertical>
          <NavItem>
            <Button color='primary' className='add-button'><span>Add gadget</span></Button>
          </NavItem>
          <NavItem>
            <Button className="other-buttons" color='warning'><span>My gadgets</span></Button>
          </NavItem>
          <NavItem>
            <Button className="other-buttons" color='info'>
              Tech News
            </Button>
          </NavItem>
        </Nav>
        <hr />
        <Button className="other-buttons" color='secondary'>
          Contact Us
        </Button>
      </div>
    );
  }
}
