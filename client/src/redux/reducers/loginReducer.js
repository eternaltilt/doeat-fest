import { ADMIN_LOGIN } from '../ActionTypes/loginAT';
import { ADMIN_LOGOUT } from '../ActionTypes/logoutAT';

const initialState = { user: [] };

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return { ...state, user: action.payload };
    case ADMIN_LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
