import React from 'react';
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import FaLineChart from 'react-icons/lib/fa/line-chart';
import FaCartPlus from 'react-icons/lib/fa/cart-plus';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
export default class SearchResultsItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger
    return(
      <div className="search-result-items">
        <div className="search-result-leftside">
          <div className="search-nav-icons">
            <button>
              <MdInfoOutline />
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
              <div className="container-fluid">
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
