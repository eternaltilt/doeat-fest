import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.footer}>
      <h3>DoEat fest</h3>

      <div>
        <p>О нас</p>
        <p>Новости</p>
        <p>Участники</p>
      </div>

      <div>
        <p>Подать заявку</p>
        <p>Поддержка</p>
        <p>Пользовательское соглашение</p>
      </div>

      <div>
        <p>DoEat fest 2022</p>
        <p>LOGOS</p>
      </div>
    </div>
  );
}

export default Footer;
