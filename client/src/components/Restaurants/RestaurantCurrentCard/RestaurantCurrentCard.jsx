/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { festivalFetch, restaurantFetch, restaurantSetFetch } from '../../../redux/thunk';
import style from './RestaurantCurrentCard.module.css';

function RestaurantCurrentCard() {
  const dispatch = useDispatch();
  const { restId } = useParams();
 console.log(restId)
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const { sets } = useSelector((state) => state.restaurantSetReducer);
  const { festival } = useSelector((state) => state.festivalReducer)
  console.log(festival)
  const currentFest = festival.find((el) => el.id === +restId)
  const currentRest = restaurants.find((el) => el.id === +restId);
  const currentSet = sets.filter((el) => el.id === +currentRest.id)
  
  console.log('СЕТЫ ИЗ СТЕЙТА =>' , sets)
  console.log('КАРРЕНТ ФЕСТ => ', currentFest)
  console.log('КАРРЕНТ РЕСТ => ', currentRest)
  console.log('КАРРЕНТ СЕТ => ', currentSet)


  useEffect(() => {
    dispatch(restaurantFetch());
    dispatch(restaurantSetFetch());
    dispatch(festivalFetch());
  }, [dispatch]);

  return (
    <section className={style.currentRestContainer}>
      <div className={style.currentRestInfo}>
        <h2 className={style.currentRestTitle}>{currentRest.title}</h2>
        <p className={style.currentRestText}>{currentRest.description}</p>
        <p className={style.currentRestPrice}>Стоимость сета: {currentFest.festivalSetPrice}&#8381;</p>
      </div>
    </section>
  );
}

export default RestaurantCurrentCard;
