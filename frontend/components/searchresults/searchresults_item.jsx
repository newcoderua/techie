import React from 'react';
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class SearchResultsItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger
    return(
      <div className="search-result-items">
        <div className="left-search-result">
          <div>
            <button className="buttons-search-results">
              + Add to My Gadgets
            </button>
          </div>
          <div>
            <button className="buttons-search-results">
              More info
            </button>
          </div>
          <div>
            <button className="buttons-search-results">
              Price Review
            </button>
          </div>
          <div>
            <button className="buttons-search-results">
              Wish to buy
            </button>
          </div>
        </div>
        <div className="right-search-result">
          <div className="lefty-right-search-result">
            <img src={this.props.img} />
          </div>
          <div className="righty-right-search-result">
            <div className="search-result-title">
              { this.props.title } { this.props.price }
            </div>
            <div className="search-result-maininfo">

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
