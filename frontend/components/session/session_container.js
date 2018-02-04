import { connect } from 'react-redux';

import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import { fetchGadgets } from '../../actions/gadgets_actions';
import Session from './session';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  // debugger
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    fetchGadgets: () => dispatch(fetchGadgets())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Session));
