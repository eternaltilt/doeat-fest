import { INIT_RESTAURANT_SET, ADD_RESTAURANT_SET, FIND_RESTAURANT_SET} from '../ActionTypes/restaurantSetAT';

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

export function findRestaurantSetAC(payload) {
  return {
    type:  FIND_RESTAURANT_SET,
    payload,
  }
}
