/* eslint-disable default-param-last */
import { ADD_REQUEST } from '../actionTypes/managerRequestAT';

const initialState = { requests: [] };

export const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return { ...state, requests: [action.payload] };
    default:
      return state;
  }
};
