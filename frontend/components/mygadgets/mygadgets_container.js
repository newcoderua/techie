import { connect } from 'react-redux';
import React from 'react';
// import { logout } from '../../actions/session_actions';
import { fetchGadgets } from '../../actions/gadgets_actions';
import MyGadgets from './mygadgets';

const mapStateToProps = ({session}, ownProps) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  fetchGadgets: () => dispatch(fetchGadgets()),
  // updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGadgets);
