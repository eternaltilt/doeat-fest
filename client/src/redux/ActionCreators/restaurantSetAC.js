import { INIT_RESTAURANT_SET, ADD_RESTAURANT_SET} from '../ActionTypes/restaurantSetAT';

export function initRestaurantSetAC(payload) {
  return {
    type: INIT_RESTAURANT_SET,
    payload,
  };
}

export function addRestaurantSetAC(payload) {
  return {
    type: ADD_RESTAURANT_SET,
    payload,
  };
}
