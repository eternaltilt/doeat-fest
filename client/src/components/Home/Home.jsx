/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Home.module.css';
import { festivalFetch } from '../../redux/thunk';

// мейнпейдж
function Home() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const { festival } = useSelector((state) => state.festivalReducer);

  useEffect(() => {
    dispatch(festivalFetch());
    festival.forEach(eachFest => {
      const now = new Date();
      const startDate = new Date(eachFest.start_date);
      const finishDate = new Date(eachFest.finish_date);
      if (now >= startDate && now <= finishDate) {
        setTitle(eachFest.title)
        setDescription(eachFest.description);
      } 
    });
  },[dispatch]) 

  return (
    <>
    <section className={style.homeContainer}>
      <div className={style.leftContainer}>
        <h1 className={style.title}>DoEat fest</h1>
        <p className={style.text}>
          – гастрономических фестивалей, который <br />
          придется по душе всем ценителям вкусной <br />
          еды и качественных напитков.
        </p>
          <button onClick={() => navigate('/calendar')} className={style.btnList} type="submit">
            Список фестивалей
          </button>
      </div>
      <div className={style.imgContainer}>
        <img src="img/mainpagePic.jpg" alt="mainpage" />
      </div>
    </section>
    <section className={style.actualFestival}>
        <h2 className={style.actualFestivalTitle}>Актуальный фестиваль</h2>
        <div className={style.actualFestivalContainer}>
         <div className={style.actualFestivalImg}>
          <img src="img/mainpagePic2.jpg" alt="mainpage2" />
         </div>
         <div className={style.actualFestivalWrapper}>
           <h3 className={style.actualFestivalTitle}>
            { title }
           </h3>
           <p className={style.actualFestivalText}>
           { description }
           </p>
           <p className={style.actualFestivalTextIt}>
           “Наш фестиваль расскажет обо всех тонкостях, особенностях и традициях гастрономических пристрастий народов этого континента.”
           </p>
           <div className={style.actualFestivalLink}> {/* ссылка на акутальные рестораны участники фестиваля */}
          <button onClick={() => navigate('/calendar')} className={style.btnActualFestival} type="submit">
            Список фестивалей
          </button>
        </div>
        </div>
        </div>
    </section>
    </>
  );
}

export default Home;
