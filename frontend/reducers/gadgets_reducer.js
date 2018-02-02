import { merge } from 'lodash';

import { RECEIVE_GADGETS, POST_GADGET } from "../actions/gadgets_actions";

const GadgetReducer = ( state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_GADGETS:
      return action.gadgets;
    case POST_GADGET:
      nextState = { [action.gadget.id]: action.gadget }
      return merge({}, state, nextState)
    default:
      return state;
  }
}

export default GadgetReducer;
