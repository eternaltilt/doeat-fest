import { INIT_FESTS } from '../ActionTypes/festsAT';

const initialState = { fests: [] };
export function festsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_FESTS:
      // console.log('STATE ', state);
      return { ...state, fests: action.payload };
    default:
      return state;
  }
}
