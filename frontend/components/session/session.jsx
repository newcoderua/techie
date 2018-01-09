import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, Form, Col, FormGroup, Label, Input, FormText } from 'reactstrap';

class Session extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default withRouter(Session);
