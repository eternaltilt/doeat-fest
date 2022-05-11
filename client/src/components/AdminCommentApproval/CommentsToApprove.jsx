/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantFetch } from '../../redux/thunk';

function Comment({ username, text, restId }) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  
  const currentRest = restaurants.find((el) => el.id === +restId);

  const onConfirm = () => {

  }

  const onDecline = () => {

  }

  useEffect(() => {
    dispatch(restaurantFetch());
  }, [dispatch]);

  return (
    <div>
      <p>{username}</p>
      <p>{text}</p>
      <p>Ресторан: {currentRest?.title}</p> 
      <button type='submit' onClick={onConfirm}>Утвердить</button>
      <button type='submit' onClick={onDecline}>Отклонить</button>
    </div>
  );
}

export default Comment;
