import { connect } from 'react-redux';
import React from 'react';
import { fetchGadgets } from '../../actions/gadgets_actions';

import AllMyGadgets from './all_my_gadgets';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGadgets: () => dispatch(fetchGadgets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMyGadgets);
