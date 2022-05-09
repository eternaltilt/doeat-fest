import { MANAGER } from '../ActionTypes/managerAT';

export function managerAC(payload) {
  return {
    type: MANAGER,
    payload,
  };
}
