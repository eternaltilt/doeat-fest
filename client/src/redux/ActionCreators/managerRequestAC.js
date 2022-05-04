import { ADD_REQUEST } from '../ActionTypes/managerRequestAT';

export function addRequestAC(payload) {
  return {
    type: ADD_REQUEST,
    payload,
  };
}
