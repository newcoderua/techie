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

        </div>
        <div className="right-search-result">

        </div>
      </div>
    )
  }
}
