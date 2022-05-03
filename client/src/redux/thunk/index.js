import { addRequestAC } from '../actionCreators/managerRequestAC';
import { initFestivalAC } from '../actionCreators/festivalAC';

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

export const fetchInitFestivals = () => {
  return (dispatch) => {
    fetch('/festivals')
      .then((res) => res.json())
      .then((data) => dispatch(initFestivalAC(data)))
      .catch((error) => console.log(error));
  };
};
