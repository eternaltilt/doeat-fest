import React from 'react';
import { Link } from 'react-router-dom';
import style from './Info.module.css'

function Info() {
  return (
    <div className={ style.allDiv }>
      <img src="img/Rectangle 3.jpeg" alt="topPic" className={style.topPicture}/>

      <div className={style.middleDiv}>
        <h3>DeEat fest</h3>
        <p>
          DoEat fest - это гастрономический фестиваль, который объединяет миллионы людей. 
          У всех фестивалей разная тема, но одна система. Заведения предлагают свои лучшие сеты 
          по фиксированной цене в определенный отрезок времени. Пробуй, наслаждайся, отдыхай!
        </p>
      </div>
      
      <div className={style.bottomDiv}>
        <img src="img/Rectangle 5.jpeg" alt="leftImg" className={style.skovorodka}/>
        <div className={style.bottomRightDiv}>
          <h3>Система DoEat fest</h3>
          <div className={style.list}>
            <div className={style.row}>
              <img src="img/Arrow1.svg" alt="" className={style.arrow}/>
              <p className={style.listText}>Заведения предлагают свои визитные карточки - дегустационные сеты</p>
            </div>
            <div className={style.row}>
              <img src="img/Arrow1.svg" alt="" className={style.arrow}/>
              <p className={style.listText}>Фиксированное количество участников</p>
            </div>
            <div className={style.row}>
              <img src="img/Arrow1.svg" alt="" className={style.arrow}/>
              <p className={style.listText}>Единая фиксированная цена</p>
            </div>
            <div className={style.row}>
              <img src="img/Arrow1.svg" alt="" className={style.arrow}/>
              <p className={style.listText}>Стоимость сета в период фестиваля значительно ниже стоимости аналогичного предложения во внефестивальное время</p>
            </div>
            <div className={style.row}>
              <img src="img/Arrow1.svg" alt="" className={style.arrow}/>
              <p className={style.listText}>Гастрофест проходит в самих заведениях-участниках и ограничен по времени</p>
            </div>
          </div>
          <div className={style.buttons}>
            <Link to="/participate">
              <button className={style.btnList} type="submit">
                Стать участником
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
