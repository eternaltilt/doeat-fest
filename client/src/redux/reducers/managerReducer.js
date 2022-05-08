/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import { INIT_REQUEST, ADD_REQUEST } from '../ActionTypes/managerRequestAT';

const initialState = { requests: [] };

export const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return { ...state, requests: [...state.requests, action.payload] };
    default:
      return state;
  }
};
