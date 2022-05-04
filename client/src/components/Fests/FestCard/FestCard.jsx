/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './FestCard.module.css';

// eslint-disable-next-line react/prop-types
function FestCard({ id, name, photo, adress }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.background} onClick={() => navigate(`/restaurant/${id}`)}>
        <div>
          <img style={{ height: '200px', width: '100%' }} src={photo} alt="img" />
        </div>
        <div>
          <span className={style.cardText}> {name} </span>
          <p className={style.cardText}>Адрес: {adress}</p>
        </div>
      </div>
    </div>
  );
}

export default FestCard;
