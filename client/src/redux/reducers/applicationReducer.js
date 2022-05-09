import { MANAGER } from '../ActionTypes/managerAT';

const initialState = { RestaurantManager: [] };

export function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case MANAGER:
      return { ...state, RestaurantManager: action.payload };
    default:
      return state;
  }
}
