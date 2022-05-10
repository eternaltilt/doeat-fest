import { MANAGER } from '../ActionTypes/managerAT';
import { DEL_MANAGER } from '../ActionTypes/delManagerAT';

const initialState = { RestaurantManager: [] };

export function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case MANAGER:
      return { ...state, RestaurantManager: action.payload };
    case DEL_MANAGER:
      return {
        ...state,
        RestaurantManager: state.RestaurantManager.filter((el) => el.id !== +action.payload),
      };
    default:
      return state;
  }
}
