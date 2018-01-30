import React from 'react';
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import SearchResultsItem from './searchresults_item';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <Container>
          <Row>
            <Col>
              { Object.keys(this.props.results).map((id) => {
                <SearchResultsItem

                  />
              })}
            </Col>
          </Row>
        </Container>
      )
    }
}
