import React from 'react';
import { Link } from 'react-router-dom';

import style from './Home.module.css';

function Home() {
  return (
    <div className={style.homeContainer}>
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
    </div>
  );
}

export default Home;
