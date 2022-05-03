/* eslint-disable default-param-last */
import { INIT_FESTIVALS } from '../actionTypes/festivalAT';

const initialState = { festivals: [] };

export const festivalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FESTIVALS:
      return { ...state, festivals: [action.payload] };
    default:
      return state;
  }
};
