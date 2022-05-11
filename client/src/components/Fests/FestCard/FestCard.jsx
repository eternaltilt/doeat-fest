/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';
import style from './FestCard.module.css';

function FestCard({festival}) {
  const [btnValue, setBtnValue] = useState('Подать заявку');

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    
    const startDay = festival.start_date.split('-');
    const startYear = Number(startDay[0]);
    const startMonth = Number(startDay[1]);
    const startDate = Number(startDay[2]);

    const finishDay = festival.finish_date.split('-');
    const finishYear = Number(finishDay[0]);
    const finishMonth = Number(finishDay[1]);
    const finishDate = Number(finishDay[2]);

    if (year > startYear && year < finishYear) {
      setBtnValue('Список участников');
    } else if (year === startYear || year === finishYear) {
      if (month > startMonth && month < finishMonth) {
        setBtnValue('Список участников'); 
      } else if (month === startMonth) {
        if (date >= startDate && date <= finishDate) {
          setBtnValue('Список участников'); 
        }
      }
    }

    if (year > finishYear) {
      setBtnValue('Завершен');
    } else if (year === finishYear) {
      if (month > finishMonth) {
        setBtnValue('Завершен'); 
      } else if (month === finishMonth) {
        if (date > finishDate) {
          setBtnValue('Завершен'); 
        }
      }
    }
  }, []);

  return (
    <div className={style.FestCardContainer}>
      <p className={style.FestCardDate}>{festival.start_date.split('-').reverse().join('-')} - {festival.finish_date.split('-').reverse().join('-')} &nbsp; </p>
      <h2 className={style.FestCardTitle}>{festival.title}</h2>
      {btnValue === 'Список участников' && <Link to={`/calendar/${festival.id}`}><button className={style.FestCardBtn} type="submit">{btnValue}</button></Link>}
      {btnValue === 'Завершен' && <button className={style.FestCardBtn} style={{color: '#808080', borderColor: '#808080'}} type="submit">{btnValue}</button>}
      {btnValue === 'Подать заявку' && <Link to='/participate'><button className={style.FestCardBtn} type="submit">{btnValue}</button></Link>}
    </div>
  );
}

export default FestCard;
