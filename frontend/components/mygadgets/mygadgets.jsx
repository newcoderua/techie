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
          </span><br/><br/>

          <div className="categories">
            <div>
              electronics
            </div>
            <div>
              auto
            </div>
            <div>
              beauty
            </div>
            <div>
              Car Electronics
            </div>
          </div>
        </div>
      )
    }
}
