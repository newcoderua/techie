import { merge } from 'lodash';

import { RECEIVE_GADGETS } from "../actions/gadgets_actions";

const GadgetReducer = ( state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_GADGETS:
      return action.gadgets;
    default:
      return state;
  }
}

export default GadgetReducer;
