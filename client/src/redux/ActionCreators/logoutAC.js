import { ADMIN_LOGOUT } from '../ActionTypes/logoutAT';

export function logoutAC(payload) {
  return {
    type: ADMIN_LOGOUT,
    payload,
  };
}
