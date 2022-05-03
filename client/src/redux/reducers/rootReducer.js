import { combineReducers } from 'redux';
import { loginReduser } from './loginReducer';
import { festivalReducer } from './festivalReducer';

export const rootReducer = combineReducers({
  loginReduser,
  festivalReducer,
});
