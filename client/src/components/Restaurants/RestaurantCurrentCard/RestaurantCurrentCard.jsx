/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { festivalFetch, restaurantFetch, restaurantSetFetch, restaurantCommentsFetch, submitCommentFetch, picturesFetch } from '../../../redux/thunk';
import style from './RestaurantCurrentCard.module.css';
import Comment  from '../../Comment/Comment';

function RestaurantCurrentCard() {
  const dispatch = useDispatch();
  const { restId, id } = useParams();
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const { sets } = useSelector((state) => state.restaurantSetReducer);
  const { festival } = useSelector((state) => state.festivalReducer)
  const { comments } = useSelector((state) => state.restaurantReducer);
 

  const currentFest = festival.find((el) => el.id === +restId);
  const currentRest = restaurants.find((el) => el.id === +restId);
  const currentSet = sets.filter((el) => el.id === +currentRest.id);
  const currentComments = comments.filter(comm => comm.restaurantCard_id === currentRest.id);
  console.log(currentSet[0].id)
  // const currentFest = festival.find((el) => el.id === +id)
  // const currentRest = restaurants.find((el) => el.id === +restId);
  // const currentSet = sets.filter((el) => el.id === +currentRest.id)

  useEffect(() => {
    dispatch(restaurantFetch());
    dispatch(restaurantSetFetch());
    dispatch(restaurantCommentsFetch());
    dispatch(festivalFetch());
    dispatch(picturesFetch(currentSet[0].id))
  }, [dispatch]);

  const addComment = (e) => {
    e.preventDefault();
    const {
      username,
      text,
    } = e.target;
    const body = {
      username: username.value,
      text: text.value,
      restaurantCard_id: currentRest.id,
    }
    e.target.reset();
    dispatch(submitCommentFetch(body));
  }

  return (
    <>
    <section className={style.currentRestContainer}>
      <div className={style.currentRestInfo}>
        <h2 className={style.currentRestTitle}>{currentRest.title}</h2>
        <p className={style.currentRestText}>{currentRest.description}</p>
        <p className={style.currentRestPrice}>Стоимость сета: {currentFest?.festivalSetPrice}&#8381;</p>
      </div>
    <img src="/" alt='img'/> 
    </section>
    <section className={style.commentsContainer}>
      <form action="" onSubmit={addComment}>
        <input type="text" id='username' placeholder='Введите ваше имя'/>
        <input type="text" id='text' placeholder='Введите ваш отзыв о ресторане'/>
        <input type="submit" />
      </form>
      <div>
        { currentComments.map((comment) => comment.status && <Comment username={comment.username} text={comment.text} status={comment.status} /> ) }
      </div>
    </section>
    </>
  );
}

export default RestaurantCurrentCard;
