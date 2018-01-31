import React from 'react';

export default class AllMyGadgets extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    this.props.fetchGadgets();
  }

  render() {
    // debugger 
    return(
      <div>
        now I have container
      </div>
    )
  }
}
