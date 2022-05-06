/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  fetchDelitSession,
  formSetFetch,
  festivalFetch,
  fetchAddFestival,
} from '../../redux/thunk';
import style from './FormSets.module.css';

function FormSets() {
  const [img, setImg] = useState(null);
  const { festival } = useSelector((state) => state.festivalReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // выход, очищение сессии
  const toLogout = async () => {
    await dispatch(fetchDelitSession());
    localStorage.clear();
    navigate('/admin');
  };

  const rezultat = festival.fest ? festival.fest : [];

  // отправляем данные по ресторану и фестивалю
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      titleSets,
      adress,
      phone,
      link,
      setDescription,
      firstDish,
      secondDish,
      thirdDish,
      allWeight,
      titleRest,
      description,
      festivalId,
    } = e.target;

    const body = {
      titleSets: titleSets.value,
      setDescription: setDescription.value,
      firstDish: firstDish.value,
      secondDish: secondDish.value,
      thirdDish: thirdDish.value,
      allWeight: allWeight.value,
      titleRest: titleRest.value,
      description: description.value,
      adress: adress.value,
      link: link.value,
      phone: phone.value,
      festivalId: festivalId.value,
    };
    e.target.reset();
    dispatch(formSetFetch(body));
  };

  const onSubmitFest = (e) => {
    e.preventDefault();
    const { festivalName, festivalDescription, festivalStart, festivalEnd, festivalSetPrice } =
      e.target;
    const body = {
      festivalName: festivalName.value,
      festivalDescription: festivalDescription.value,
      festivalStart: festivalStart.value,
      festivalEnd: festivalEnd.value,
      festivalSetPrice: festivalSetPrice.value,
    };
    e.target.reset();
    dispatch(fetchAddFestival(body));
  };
  // вытаскиваем все фестивали
  const festival1 = () => {
    dispatch(festivalFetch());
  };

  return (
    <>
      <section className={style.mainForm}>
        <form onSubmit={onSubmit} action="">
          <div id="sets">
            <button onClick={toLogout} className="button" type="button">
              Выйти
            </button>{' '}
            <br />
            <div>ФОРМА ДОБАВЛЕНИЯ СЕТА</div>
            <input
              type="text"
              id="titleSets"
              className="title"
              placeholder="название сета"
              autoComplete="off"
            />
            <input
              type="text"
              id="setDescription"
              className="setDescription"
              placeholder="описание сета"
              autoComplete="off"
            />
            <input
              type="text"
              id="firstDish"
              className="firstDish"
              placeholder="первое блюдо"
              autoComplete="off"
            />
            <input
              type="text"
              id="secondDish"
              className="secondDish"
              placeholder="второе блюдо"
              autoComplete="off"
            />
            <input
              type="text"
              id="thirdDish"
              className="thirdDish"
              placeholder="третье блюдо"
              autoComplete="off"
            />
            <input
              type="text"
              id="allWeight"
              className="allWeight"
              placeholder="общий вес"
              autoComplete="off"
            />
            {/* <input type="text" onClick={festival1} id='festivalId' className="festivalId" placeholder='festival'/> */}
            <select onClick={festival1} className="form-select" id="festivalId">
              {rezultat.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
            <div id="Resta">
              <div>ФОРМА ДОБАВЛЕНИЯ РЕСТОРАНА</div>
              <input
                type="text"
                id="titleRest"
                className="title"
                placeholder="название ресторана"
                autoComplete="off"
              />
              <input
                type="text"
                id="description"
                className="description"
                placeholder="описание ресторана"
                autoComplete="off"
              />
              <input
                type="text"
                id="adress"
                className="adress"
                placeholder="адресс ресторана"
                autoComplete="off"
              />
              <input
                type="text"
                id="link"
                className="link"
                placeholder="ссылочка на ресторан"
                autoComplete="off"
              />
              <input
                type="text"
                id="phone"
                className="phone"
                placeholder="телефон ресторана"
                autoComplete="off"
              />
              <input
                type="text"
                id="worktime"
                className="time"
                placeholder="время работы ресторана"
                autoComplete="off"
              />
              <input
                type="text"
                id="worktime"
                className="time"
                placeholder="ТУТ ДОБАВЛЕНИЕ ФОТОГРАФИИ"
                autoComplete="off"
              />
            </div>
            <button className="button" type="submit">
              Отправить
            </button>
          </div>
        </form>
      </section>
      <h3 className={style.festFormTitle}>Создать фестиваль</h3>
      <section className={style.festForm}>
        <div className={style.festFormContainer}>
          <form onSubmit={onSubmitFest} action="" method="post">
            <div>
              <input
                type="text"
                id="festivalName"
                name="festivalName"
                placeholder="Название фестиваля"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                id="festivalDescription"
                name="festivalDescription"
                placeholder="Описание фестиваля"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="date"
                id="festivalStart"
                name="festivalStart"
                placeholder="Дата начала"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="date"
                id="festivalEnd"
                name="festivalEnd"
                placeholder="Дата окончания"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                id="festivalSetPrice"
                name="festivalSetPrice"
                placeholder="Стоимость сета"
                autoComplete="off"
              />
            </div>
            <button type="submit">Сохранить</button>
          </form>
        </div>
        
      </section>
    </>
  );
}

export default FormSets;
