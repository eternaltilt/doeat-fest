/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './RestaurantCard.module.css';


// eslint-disable-next-line react/prop-types
function RestaurantCard({ restaurant, festId }) {

  const navigate = useNavigate();


  return (
    <div>
      <div className={style.background} onClick={() =>  navigate(`/calendar/${festId}/${restaurant.id}`)}>
        <div>
          <img style={{ height: '200px', width: '100%' }} src={restaurant.RestaurantCard.img} alt="img" />
        </div>
        <div>
          <span className={style.cardText}> {restaurant.RestaurantCard.title}</span>
          <p className={style.cardText}>Адрес: {restaurant.RestaurantCard.adress} </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
