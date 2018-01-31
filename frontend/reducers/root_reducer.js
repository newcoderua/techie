import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import GadgetsReducer from './gadgets_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  gadgets: GadgetsReducer
});

export default RootReducer;
