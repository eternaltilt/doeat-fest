import { DEL_MANAGER } from '../ActionTypes/delManagerAT';

export function delManagerAC(payload) {
  return {
    type: DEL_MANAGER,
    payload,
  };
}
