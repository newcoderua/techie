import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, Form, Col, FormGroup, Label, Input, FormText } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';

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
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.closeModal();
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
    this.props.updateName(user.username);
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {username: "Albert_Einstein", email: "Albi@yahoo.com", password :"654321"}}
    this.props.login(guest);
    this.props.updateName(guest.user.username);
  }

  // I need to catch errors somehow

  responseFacebook(response) {
    console.log(response);

  }

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
        <FacebookLogin
          appId="172743610152075"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />
        <Button id='buttonSubmit' onClick={this.handleSubmit} color='success'>Submit</Button>
      </Form>
    )
  }
}

// <Button color="primary" onClick={this.loginGuest} >Continue with Facebook</Button>{' '}
export default withRouter(Session);
