/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantFetch, confirmDeclineRestaurantCommentFetch } from '../../redux/thunk';
import { confirmRestaurantCommentsAC, declineRestaurantCommentsAC } from '../../redux/ActionCreators/restaurantAC';
import style from './CommentsToApprove.module.css';

function Comment({ id, username, text, restId }) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  
  const currentRest = restaurants.find((el) => el.id === +restId);

  const onConfirm = () => {
    const isConfirmed = true;
    const body = {
      id,
      isConfirmed,
    }
    dispatch(confirmDeclineRestaurantCommentFetch(body));
    dispatch(confirmRestaurantCommentsAC(id));
  }

  const onDecline = () => {
    const isConfirmed = false;
    const body = {
      id,
      isConfirmed,
    }
    dispatch(confirmDeclineRestaurantCommentFetch(body));
    dispatch(declineRestaurantCommentsAC(id));
  }

  useEffect(() => {
    dispatch(restaurantFetch());
  }, [dispatch]);
 
  return (
    // <div className={style.manager}>
    //   <p>{username}</p>
    //   <p>{text}</p>
    //   <p>Ресторан: {currentRest?.title}</p> 
    //   <button type='submit' onClick={onConfirm}>Утвердить</button>
    //   <button type='submit' onClick={onDecline}>Отклонить</button>
    // </div>
    <div className={style.manager}>
      <h5 className={style.name}>Имя: {username}</h5>
      <p className={style.text}>Отзыв: {text}</p>
      <p className={style.text}>Ресторан: {currentRest?.title}</p>
      <div className={style.btnsDiv}>
      <button type='submit' className={style.buttonInput} onClick={onConfirm}>Утвердить</button>
      <button type='submit' className={style.buttonInput} onClick={onDecline}>Отклонить</button>
      </div>
      
    </div>
  );
}

export default Comment;
