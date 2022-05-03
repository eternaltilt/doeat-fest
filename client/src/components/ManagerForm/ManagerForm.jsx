/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAddRequest, fetchInitFestivals } from '../../redux/thunk/index';
import style from './ManagerForm.module.css';

function ManagerForm() {
  const { festivals } = useSelector((state) => state.festivalsReducer);
  console.log(festivals);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const restaurantName = useRef();
  const festivalId = useRef();

  useEffect(() => {
    dispatch(fetchInitFestivals());
  }, [dispatch]);

  const addRequest = (event) => {
    const newRequest = {
      name: name.current.value,
      phone_number: phone.current.value,
      email: email.current.value,
      restaurant_name: restaurantName.current.value,
      festival_id: festivalId.current.current,
    };
    dispatch(fetchAddRequest(newRequest));
    navigate('/');
  };

  return (
    <div className={style.formContainer}>
      <div className={style.leftContainer}>
        <h2 className={style.title}>Заявка для представителя завезедия </h2>
      </div>
      <div className={style.rightContainer}>
        <form onSubmit={addRequest}>
          <div>
            <input
              ref={name}
              className={style.inputSize}
              type="text"
              id="name"
              placeholder="Ваше имя"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              ref={phone}
              className={style.inputSize}
              type="tel"
              id="phone"
              placeholder="Номер телефона"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              ref={email}
              className={style.inputSize}
              type="email"
              id="email"
              placeholder="E-mail"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              ref={restaurantName}
              className={style.inputSize}
              type="text"
              id="restaurantName"
              placeholder="Название ресторана"
              autoComplete="off"
            />
          </div>
          <div>
            <select ref={festivalId} className={style.inputSize}>
              <option value="0">Выберете фестиваль</option>
              <option value="1">Festival 1</option>
              <option value="2">Festival 2</option>
              <option value="3">Festival 3</option>
              <option value="4">Festival 4</option>
              <option value="5">Festival 5</option>
            </select>
          </div>
          <div>
            <button className={style.formBtn} type="submit" id="formBtn">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagerForm;
