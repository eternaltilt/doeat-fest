import { INIT_RESTAURANT_SET, ADD_RESTAURANT_SET } from '../ActionTypes/restaurantSetAT';

const initialState = { sets: []};

export function restaurantSetReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_RESTAURANT_SET:
      return { ...state, sets: action.payload};
    case ADD_RESTAURANT_SET:
      return { ...state, sets: [...state.sets, action.payload]};
      default:
        return state;
    }
  }
