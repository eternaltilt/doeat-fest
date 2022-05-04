import { addRequestAC } from '../ActionCreators/managerRequestAC';
import { loginAC } from '../ActionCreators/loginAC';
import { logoutAC } from '../ActionCreators/logoutAC';
import { festivalAC } from '../ActionCreators/festivalAC';

export const loginFetch = (payload) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(loginAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const fetchDelitSession = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(logoutAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const formSetFetch = (payload) => {
  return () => {
    fetch(`${process.env.REACT_APP_BACK_DB}/sets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };
};

export const festivalFetch = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/festival`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(festivalAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const fetchAddRequest = (payload) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/participate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((newRequest) => dispatch(addRequestAC(newRequest)));
  };
};
