import React from 'react';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import { Link } from 'react-router-dom';
import AddGadget from './add_gadget'

export default class MyGadgets extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    document.getElementById('rightNavId').style.display = 'flex';
    document.getElementById('addnew-button').style.background = '#181838';
    document.getElementById('addnew-button').style.color = '#dfaa08';

  }

  render() {
    // alert('hey')
      return(
        <div className='my-gadgets-nav'>
          <FaCameraRetro id='nav-icon-gadget' />
          <span id="my-gadgets-name">
            My Gadgets
          </span><br />
        <button id="addnew-button" onClick={this.clickHandler}>
            + Add New
          </button><br /><br/>
          <span>
            Categories
          </span><br/>

          <div className="categories">

          </div>
        </div>
      )
    }
}

// <div className="div-categories-buttons"><button className="categories-buttons">TV & Video</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Home Audio & Theater</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Camera, Photo & Video</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Cell Phones & Accessories</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Headphones</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Video Games</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Bluetooth & Wireless Speakers</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Car Electronics</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Musical Instruments</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Wearable Technology</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Electronics Showcase</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Computers & Tablets</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Monitors</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Accessories</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Networking</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Drives & Storage</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Computer Parts & Components</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Software</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Printers & Ink</button></div>
// <div className="div-categories-buttons"><button className="categories-buttons">Office & School Supplies</button></div>
