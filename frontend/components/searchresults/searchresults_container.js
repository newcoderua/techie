import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
// import { updateFilter } from '../../actions/filter_actions';
import SearchResults from './searchresults';

const mapStateToProps = ({session}, ownProps) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout()),
  // updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
