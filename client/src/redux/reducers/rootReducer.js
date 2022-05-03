import { combineReducers } from 'redux';
import { managerReducer } from './managerReducer';
import { festivalsReducer } from './festivalsReducer';

export const rootReducer = combineReducers({
  managerReducer,
  festivalsReducer,
});
