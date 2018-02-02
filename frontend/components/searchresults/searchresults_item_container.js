import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { createGadget } from '../../actions/gadgets_actions';
import SearchResultsItem from './searchresults_item';

const mapStateToProps = ({session}, ownProps) => {
  // debugger
  return {
  currentUser: session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  createGadget: (gadget) => dispatch(createGadget(gadget)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsItem);
