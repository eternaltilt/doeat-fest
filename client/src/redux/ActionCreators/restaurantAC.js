import { INIT_RESTAURANT, ADD_RESTAURANT} from '../ActionTypes/restaurantAT';

export function initRestaurantAC(payload) {
  return {
    type: INIT_RESTAURANT,
    payload,
  };
}

export function addRestaurantAC(payload) {
  return {
    type: ADD_RESTAURANT,
    payload,
  };
}
