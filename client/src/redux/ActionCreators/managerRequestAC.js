import { INIT_REQUEST } from '../ActionTypes/managerRequestAT';

export function addRequestAC(payload) {
  return {
    type: INIT_REQUEST,
    payload,
  };
}
