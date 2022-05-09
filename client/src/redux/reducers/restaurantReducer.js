import { INIT_RESTAURANT, ADD_RESTAURANT } from '../ActionTypes/restaurantAT';

const initialState = { restaurants: []};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_RESTAURANT:
      return { ...state, restaurants: action.payload};
    case ADD_RESTAURANT:
      return { ...state, restaurants: [...state.restaurants, action.payload]};
      default:
        return state;
    }
  }
