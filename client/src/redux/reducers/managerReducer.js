/* eslint-disable default-param-last */
import { INIT_REQUEST } from '../ActionTypes/managerRequestAT';

const initialState = { requests: [] };

export const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_REQUEST:
      return { ...state, requests: [action.payload] };
    default:
      return state;
  }
};
