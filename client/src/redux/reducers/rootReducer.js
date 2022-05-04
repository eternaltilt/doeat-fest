import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { festivalReducer } from './festivalReducer';
import { managerReducer } from './managerReducer';

export const rootReducer = combineReducers({
  loginReducer,
  festivalReducer,
  managerReducer,
});
