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
      loginButton : this.props.loginButton,
      signup : 'Sign Up',
      login : 'Login',
      loginText : 'If you already have an account',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.FBlogout = this.FBlogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.loggedIn) {
      // debugger
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
    if (this.state.signup === 'Login') {
      this.props.login({ user })
    } else {
      this.props.processForm({ user });
    }
    this.props.updateName(user.username);
  }

  // loginGuest(e) {
  //   e.preventDefault();
  //   const guest = { user: {username: "Albert_Einstein", email: "Albi@yahoo.com", password :"654321"}}
  //   this.props.login(guest);
  //   this.props.updateName(guest.user.username);
  // }

  // I need to catch errors somehow

  responseFacebook(response) {
    // debugger
    var username = response.name;
    var email = response.email;
    var password = response.id;

    var user = { username : username, email : email, password : password }
// debugger
    this.props.processForm({user}).then((resp) => {
      // debugger
      if (resp.type === "RECEIVE_ERRORS") {
        this.props.login({ user })
      }
      this.props.updateName(user.username);
    });

  }

  FBlogout() {
    var mykey = facebook.api_key;

    FB.init({
      appId            : mykey,
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });

    FB.logout(function(response) {
      console.log(response);
    });
  }

  handleLogin(e) {
    e.preventDefault();
    if (this.state.signup === "Login") {
      this.setState({ signup : "Sign Up" });
      this.setState({ login : "Login" });
      this.setState({ loginText : "If you already have an account"});
    } else {
      this.setState({ signup : "Login" });
      this.setState({ loginText : "Don't have an account? Please, "})
      this.setState({ login : "Sign Up" });
    }
  }

  render() {
    // debugger
    const auth = () => {
      return(
        <div>
          <div className="change-login-signup">{this.state.loginText} <button className="button-change-login-signup" onClick={this.handleLogin}>{this.state.login}</button></div>
        <div><Button id='auth-button' id='buttonSubmit' onClick={this.handleSubmit} color='success'>{this.state.signup}</Button></div>
      </div>
      );
    }

    var mykey = facebook.api_key;
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
            <Input type="password" value={this.state.password} onChange={this.update('password')} name="password" id="password-session" placeholder="2dfnkTR92c" />
          </Col>
        </FormGroup>
        <div className="auth-buttons">
          <div>
            <FacebookLogin
            appId={mykey}
            autoLoad={true}
            id='auth-button'
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
          </div>
          <div>
            { auth() }
          </div>
        </div>
      </Form>
    )
  }
}

// <Button color="primary" onClick={this.loginGuest} >Continue with Facebook</Button>{' '}
export default withRouter(Session);
