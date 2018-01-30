import React from 'react';
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import FaLineChart from 'react-icons/lib/fa/line-chart';
import FaCartPlus from 'react-icons/lib/fa/cart-plus';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
// import Modal from 'react-responsive-modal';
// import 'react-responsive-modal/lib/react-responsive-modal.css';
// import Modal from 'react-responsive-modal/lib/css';



export default class SearchResultsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        modal: false
      };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // e.preventDefault();
    // debugger
    return(
      <div className="search-result-items">
        <div className="search-result-leftside">
          <div className="search-nav-icons">
            <button onClick={this.toggle}>
              <MdInfoOutline />
                <Modal isOpen={this.state.modal} height="auto" toggle={this.toggle} className='yo'>
                  <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                  <ModalBody>
                    <div className="main-modal-item">
                      <div className="left-main-modal-item">
                        <img src={this.props.largeImage} />
                      </div>
                      <div className="right-main-modal-item">
                        <b>Company Name:</b>  {this.props.companyName}<br />
                      <b>Color:</b>  {this.props.color} <br />
                    <b>Size:</b>  {this.props.size} <br /><br />

                  <b><u>Features: </u></b>
                        {this.props.feature}
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Add Gadget</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
            </button>
          </div>
          <div className="search-nav-icons">
            <button>
              <FaLineChart />
            </button>
          </div>
          <div className="search-nav-icons">
            <button>
              <FaCartPlus />
            </button>
          </div>
          <div className="search-nav-icons">
            <button>
              <FaPlusCircle id='add-button-green'/>
            </button>
          </div>

        </div>
        <div className="major-div-image-class">
          <div className="div-image-class">
            <img src={this.props.img} />
          </div>
          <div className="major-div-info-class">
            <div className="major-div-info-class-header">
              { this.props.title }
            </div>
            <div className="company-name">
              by {this.props.companyName}

            </div>
            <div className="main-item-description">
              <div className="left-main-item-description">
                <span id="modification">Modification</span><br /><br />
                <span id="left-modif-keys">Price:</span> <span id="right-modif-keys">{this.props.price}</span><br />
                <span id="left-modif-keys">Color:</span> <span id="right-modif-keys">{this.props.color}</span><br />
                <div className='size-box'><span id="left-modif-keys">Size:</span> <span id="right-modif-keys">{this.props.size}</span></div>
              </div>
              <div id="right-main-item-description">
                {this.props.feature}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

// key={id}
// id={id}
// img={img}
// title={self.state.results[id].ItemAttributes['0'].Title['0']}
// companyName={self.state.results[id].ItemAttributes['0'].Brand['0']}
// feature={self.state.results[id].ItemAttributes['0'].Feature}
// price={self.state.results[id].ItemAttributes['0'].ListPrice['0'].FormattedPrice['0']}
