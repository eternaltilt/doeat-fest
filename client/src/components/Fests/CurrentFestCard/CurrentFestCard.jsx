/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { initFestsAC } from '../../../redux/ActionCreators/festsAC';
import FestCard from '../../Restaurants/RestaurantCard/RestaurantCard';
import style from './CurrentFestCard.module.css';

function Fests() {
  
  const { festival } = useSelector((state) => state.festivalReducer);
  console.log(festival)
  // const dispatch = useDispatch();
  const { id } = useParams()
  console.log(id)
  const currentFestCard = festival.find(el => el.id === +id)
  console.log(currentFestCard)
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
          <h5 className={style.text}>Set price: {currentFestCard.festivalSetPrice}</h5>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
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

export default Fests;
