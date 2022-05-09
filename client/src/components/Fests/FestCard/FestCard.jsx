/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';
import style from './FestCard.module.css';

function FestCard({festival}) {
  return (
    <div className={style.FestCardContainer}>
      <p className={style.FestCardDate}>{festival.start_date.split('.').reverse().join('.')} - {festival.finish_date.split('.').reverse().join('.')} &nbsp; </p>
      <h2 className={style.FestCardTitle}>{festival.title}</h2>
      <Link to={`/calendar/${festival.id}`}><button className={style.FestCardBtn} type="submit">Кнопка</button></Link>
    </div>
  );
}

export default FestCard;
