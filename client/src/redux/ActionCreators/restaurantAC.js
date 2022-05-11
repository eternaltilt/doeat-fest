import { INIT_RESTAURANT, ADD_RESTAURANT, INIT_COMMENTS, CONFIRM_COMMENTS, DECLINE_COMMENTS} from '../ActionTypes/restaurantAT';

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

export function initRestaurantCommentsAC(payload) {
  return {
    type: INIT_COMMENTS,
    payload,
  };
}

export function confirmRestaurantCommentsAC(payload) {
  return {
    type: CONFIRM_COMMENTS,
    payload,
  };
}

export function declineRestaurantCommentsAC(payload) {
  return {
    type: DECLINE_COMMENTS,
    payload,
  };
}
