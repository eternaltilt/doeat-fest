import { INIT_FESTS } from '../actionTypes/festsAT';

const initialState = { fests: [] };
export function festsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_FESTS:
      return { ...state, fests: action.payload };
    default:
      return state;
  }
}
