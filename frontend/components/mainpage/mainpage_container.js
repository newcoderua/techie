import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchGadgets } from '../../actions/gadgets_actions';
import MainPage from './mainpage';

const mapStateToProps = ({ session }) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout()),
  fetchGadgets: () => dispatch(fetchGadgets()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
