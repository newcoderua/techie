import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, Form, Col, FormGroup, Label, Input, FormText } from 'reactstrap';

class Session extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: "",
      loginButton : this.props.loginButton
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.loggedIn) {
      // debugger
      this.props.closeModal();
      // this.props.history.push(`/`);
    }
  }

  update(field) {
    return e => {
        this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
    debugger
    this.props.updateName(user.username);
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {username: "Albert_Einstein", email: "Albi@yahoo.com", password :"654321"}}
    this.props.login(guest);
    // debugger
    this.props.updateName(guest.user.username);
  }

  // I need to catch errors somehow

  render() {
    // debugger
    return(
      <Form>
        <FormGroup row>
          <Label sm={2}>Username</Label>
          <Col sm={10}>
            <Input value={this.state.username} onChange={this.update('username')} name="username" id="username-session" placeholder="ex. Chandler" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <Input value={this.state.email} onChange={this.update('email')} name="email" id="email-session" placeholder="chandler@gmail.com" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input value={this.state.password} onChange={this.update('password')} name="password" id="password-session" placeholder="2dfnkTR92c" />
          </Col>
        </FormGroup>
        <Button color="success" onClick={this.loginGuest} >Login as Guest</Button>{' '}
        <Button id='buttonSubmit' onClick={this.handleSubmit} color='primary'>Submit</Button>
      </Form>
    )
  }
}

export default withRouter(Session);
