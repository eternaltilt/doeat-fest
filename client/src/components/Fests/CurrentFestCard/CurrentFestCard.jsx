/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import {  } from '../../../redux/ActionCreators/festivalAC'
import { restaurantFetch } from '../../../redux/thunk';
// import 
import style from './CurrentFestCard.module.css';

function CurrentFestCard() {
  
  const dispatch = useDispatch();
  const { festival } = useSelector((state) => state.festivalReducer);
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const { id } = useParams()
  const currentFestCard = festival.find(el => el.id === +id)

  useEffect(() => {
    dispatch(restaurantFetch());
  },[dispatch]) 



  return (
    <div className={style.background}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <h3 className={style.text}>Фестиваль {currentFestCard.title}</h3>
          <p className={style.extraText}>
            Наш фестиваль расскажет обо всех тонкостях, особенностях и традициях гастрономических
            пристрастий народов этого континента.
          </p>
        </div>
        <div className={style.headerRight}>
          <h5 className={style.text}>Стоимость сета: {currentFestCard.festivalSetPrice}&#8381; </h5>
          <div className={style.buttons}>
            <button className={style.buttonLeft} type="submit">
              Список
            </button>
            <button className={style.buttonRight} type="submit">
              Карта
            </button>
          </div>
        </div>
      </div>
      <div>
       {/* {festival.length && festival.map(el => <FestCard key={el.id} festival = {el}/>)} */}
        {/* {fests.map((elm) => (
          <FestCard
            key={elm.id}
            id={elm.id}
            name={elm.name}
            description={elm.description}
            photo={elm.photo}
            adress={elm.adress}
          />
        ))} */}
      </div>
    </div>
  );
}

export default CurrentFestCard;
