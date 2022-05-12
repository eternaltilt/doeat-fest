import { INIT_FESTIVAL, ADD_FESTIVAL } from '../ActionTypes/festivalAT';

const initialState = { festival: [] };

export function festivalReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_FESTIVAL:
      return { ...state, festival: action.payload.reverse()};
    case ADD_FESTIVAL: 
      return { ...state, festival: [...state.festival, action.payload] };
    default:
      return state;
  }
}
