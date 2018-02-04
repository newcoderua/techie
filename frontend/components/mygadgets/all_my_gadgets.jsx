import React from 'react';
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import MyGadgetItem from './my_gadget_item';

export default class AllMyGadgets extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    if (Object.keys(this.props.gadgets).length === 0) {
      return(
        <div>
          You have no gadgets yet
        </div>
      );
    } else {
      return(
        <div className="header-my-gadgets">

          <div className="header-info-my-gadgets">
            <div className="favorites-gadgets">Favorites</div>
            <div className="other-feature-gadgets">
              <div>Action</div>
              <div>Sort</div>
              <div>Edit</div>
            </div>
          </div>

          <div>
            <div>Main picture</div>
            <div>General Info</div>
            <div>Technical info</div>
            <div>Price Analytics</div>
          </div>
          <div >
            {Object.keys(this.props.gadgets).map((id) => (
              <MyGadgetItem

                />
            ))}
          </div>
        </div>
      )
    }
  }
}


// <div className="no-gadgets" id="no-gadgets">
//   {Object.keys(this.props.gadgets).map((id) => (
//     <MyGadgetItem
//
//       />
//   ))}
// </div>
