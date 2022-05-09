/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { festivalFetch } from '../../../redux/thunk';
import FestCard from '../FestCard/FestCard';
import style from './FestList.module.css';

function FestList() {
  const dispatch = useDispatch();
  const { festival } = useSelector((state) => state.festivalReducer);
 
  useEffect(() => {
    dispatch(festivalFetch());
  },[dispatch]) 

  return (
      <div> 
        {festival.length && festival.map(el => <FestCard key={el.id} festival = {el}/>)}
      </div>
  );
}

export default FestList;
