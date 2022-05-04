import { ADMIN_LOGIN } from '../ActionTypes/loginAT';

export function loginAC(payload) {
  return {
    type: ADMIN_LOGIN,
    payload,
  };
}
