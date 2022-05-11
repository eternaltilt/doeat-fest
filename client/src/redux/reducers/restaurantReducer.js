import { INIT_RESTAURANT, ADD_RESTAURANT, INIT_COMMENTS, CONFIRM_COMMENTS, DECLINE_COMMENTS } from '../ActionTypes/restaurantAT';

const initialState = { restaurants: [], comments: []};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_RESTAURANT:
      return { ...state, restaurants: action.payload};
    case ADD_RESTAURANT:
      return { ...state, restaurants: [...state.restaurants, action.payload]};
    case INIT_COMMENTS:
      return { ...state, comments: action.payload};
    case CONFIRM_COMMENTS:
      // eslint-disable-next-line no-case-declarations
      const arr = state.comments;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === action.payload) {
          arr[i].status = true;
        }
      }
      return {...state, comments: arr};
    case DECLINE_COMMENTS:
      return {...state, comments: [...state.comments.filter(elm => elm.id !== action.payload)]};  
    default:
      return state;
    }
  }
