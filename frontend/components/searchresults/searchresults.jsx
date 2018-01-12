import React from 'react';
import { Container, Row, Col,
  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import SearchResultsItem from './searchresults_item';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   results : this.props.results,
    // }
  }

  render() {
    // debugger
    // if (this.props.results.length === 0) {
    //   return(
    //     <div>
    //
    //     </div>
    //   );
    // } else {
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
  // }
}
