import React from 'react';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';


export default class MyGadgets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // alert('hey')
      return(
        <div className='yo'>
          <FaCameraRetro /> My Gadgets
        </div>
      )
    }
}
