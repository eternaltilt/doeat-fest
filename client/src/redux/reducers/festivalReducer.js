import { FESTIVAL } from '../ActionTypes/festivalAT';

const initialState = { festival: [] };

export function festivalReducer(state = initialState, action) {
  switch (action.type) {
    case FESTIVAL:
      return { ...state, festival: action.payload };
    default:
      return state;
  }
}
