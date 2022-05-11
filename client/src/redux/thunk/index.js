/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// import { addRequestAC } from '../ActionCreators/managerRequestAC';
import { loginAC } from '../ActionCreators/loginAC';
import { logoutAC } from '../ActionCreators/logoutAC';
import { festivalAC, addFestivalAC } from '../ActionCreators/festivalAC';
import { addRequestAC } from '../ActionCreators/managerRequestAC';
import { managerAC } from '../ActionCreators/managerAC';
import { delManagerAC } from '../ActionCreators/delManagerAC';
import { initRestaurantAC, initRestaurantCommentsAC } from '../ActionCreators/restaurantAC';
import { findRestaurantSetAC, initRestaurantSetAC} from '../ActionCreators/restaurantSetAC'


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

export const restaurantFetch = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/restaurantCards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(initRestaurantAC(data)))
      .catch((err) => console.log(err.message));
  };
}
 
export const restaurantSetFetch = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/sets`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(initRestaurantSetAC(data)))
      .catch((err) => console.log(err.message));
  };
}

export const restaurantCommentsFetch = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(initRestaurantCommentsAC(data)))
      .catch((err) => console.log(err.message));
  };
}

export const submitCommentFetch = (payload) => {
  return () => {
    fetch(`${process.env.REACT_APP_BACK_DB}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };
};
// export const restaurantSetIdFetch = () => {
//   return (dispatch) => {
//     fetch(`${process.env.REACT_APP_BACK_DB}/restaurantCards`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => dispatch(findRestaurantSetAC(data)))
//       .catch((err) => console.log(err.message));
//   };
// }

export const fetchAddRequest = (payload) => {
  return (dispatch) => {
    console.log(payload, 'payload');
    fetch(`${process.env.REACT_APP_BACK_DB}/participate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addRequestAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const fetchAddFestival = (payload) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/festival`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addFestivalAC(data)));
  };
};

// заявки от менеджеров
export const managerFetch = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/manager`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(managerAC(data)))
      .catch((err) => console.log(err.message));
  };
};

// удаление заявки
export const delManager = (payload) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACK_DB}/manager/${payload}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => dispatch(delManagerAC(data)))
      .catch((err) => console.log(err.message));
  };
};
