import { INIT_RESTAURANT, ADD_RESTAURANT, INIT_COMMENTS } from '../ActionTypes/restaurantAT';

const initialState = { restaurants: [], comments: []};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_RESTAURANT:
      return { ...state, restaurants: action.payload};
    case ADD_RESTAURANT:
      return { ...state, restaurants: [...state.restaurants, action.payload]};
    case INIT_COMMENTS:
      return { ...state, comments: action.payload};
    default:
      return state;
    }
  }
