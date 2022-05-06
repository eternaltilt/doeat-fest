import { INIT_REQUEST, ADD_REQUEST } from '../ActionTypes/managerRequestAT';

export function addRequestAC(payload) {
  return {
    type: ADD_REQUEST,
    payload,
  };
}

export function initRequestAC(payload){
  return {
    type: INIT_REQUEST,
    payload,
  }
}
