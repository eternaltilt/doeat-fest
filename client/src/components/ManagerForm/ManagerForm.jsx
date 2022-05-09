/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { festivalFetch, fetchAddRequest } from '../../redux/thunk/index';
import style from './ManagerForm.module.css';

function ManagerForm() {
  const {festival}= useSelector(state=>state.festivalReducer)
  console.log(festival)

  const dispatch = useDispatch()

  // собираем данные и отправляем заявку
  const result = festival || [];
  const onSubmit = (event) => {
    event.preventDefault();

    const { name, phone, email,restaurantName, festivalId } = event.target;
    
    const body  = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      restaurantName: restaurantName.value,
      festivalId: festivalId.value,
    }
    event.target.reset();
    dispatch(fetchAddRequest(body))
  }


  // const festival1 = () => {
  //   dispatch(festivalFetch())
  // }

  useEffect(() => {
    dispatch(festivalFetch());
  },[dispatch]) 
  

  return (
    <div className={style.formContainer}>
      <div className={style.leftContainer}>
        <h2 className={style.title}>Заявка для представителя заведения </h2>
      </div>
      <div className={style.rightContainer}>
        <form onSubmit={onSubmit} action="" method='post'>
          <div>
            <input
              className={style.inputSize}
              type="text"
              id="name"
              placeholder="Ваше имя"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              className={style.inputSize}
              type="tel"
              id="phone"
              placeholder="Номер телефона"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              className={style.inputSize}
              type="email"
              id="email"
              placeholder="E-mail"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              className={style.inputSize}
              type="text"
              id="restaurantName"
              placeholder="Название ресторана"
              autoComplete="off"
            />
          </div>
          <div>
            <select className={style.inputSize} id="festivalId">
             {result.map((el)=> (<option key={el.id} value={el.id}>{el.title}</option>) )}
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
