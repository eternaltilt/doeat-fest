import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { festivalReducer } from './festivalReducer';
import { managerReducer } from './managerReducer';
import { applicationReducer } from './applicationReducer';
import { restaurantReducer } from './restaurantReducer';
import { restaurantSetReducer } from './restaurantSetReducer';
import { picturesReducer } from './picturesReducer';

export const rootReducer = combineReducers({
  loginReducer,
  festivalReducer,
  managerReducer,
  applicationReducer,
  restaurantReducer,
  restaurantSetReducer,
  picturesReducer,
});
