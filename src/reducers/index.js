import { combineReducers } from 'redux';
import user from './user';
import role from './role';
import project from './project';

const rootReducer = combineReducers({
  project,
  role,
  user,
});

export default rootReducer;
