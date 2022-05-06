/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import style from './Home.module.css';

// мейнпейдж
function Home() {
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
        <Link to="/restaurants">
          <button className={style.btnList} type="submit">
            Список заведений
          </button>
        </Link>
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
         <div>
           <h3 className={style.actualFestivalTitle}>
            Фестиваль Европейской еды 
           </h3>
           <p className={style.actualFestivalText}>
           Каждый из нас знаком с фразой "европейская кухня", но что это такое, вряд ли мы сможет сразу ответить. Казалось бы, европейская кухня - это кухня стран Европы, но в Европейском союзе более 40 государств. Получается, что во всех этих странах люди едят одинаковые блюда? Конечно же, это не так.
           </p>
           <p className={style.actualFestivalTextIt}>
           “Наш фестиваль расскажет обо всех тонкостях, особенностях и традициях гастрономических пристрастий народов этого континента.”
           </p>
           <Link to="/restaurants"> {/* ссылка на акутальные рестораны участники фестиваля */}
          <button className={style.btnActualFestival} type="submit">
            Список участников
          </button>
        </Link>
        </div>
        </div>
    </section>
    <section className={style.news}> 
      <h3 className={style.newsTitle}>Новости</h3>
      <div className={style.cardsContainer}>
        <div>
          123
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
