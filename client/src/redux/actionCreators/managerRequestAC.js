import { ADD_REQUEST } from '../actionTypes/managerRequestAT';

export function addRequestAC(payload) {
  return {
    type: ADD_REQUEST,
    payload,
  };
}
