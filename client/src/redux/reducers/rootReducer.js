import { combineReducers } from 'redux';
import { festsReducer } from './festsReducer';

export const rootReducer = combineReducers({
  fests: festsReducer,
});
