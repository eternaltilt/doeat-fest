/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Navbar.module.css';

import Menu from '../Menu/Menu';

function Navbar() {
  // открывать и закрывать меню
  const [menuActive, setMenuActive] = useState(false);

  // ссылки в меню
  const items = [
    { value: 'Главная', href: '/' },
    { value: 'О нас', href: '/info' },
    { value: 'Участники', href: '/fests' },
  ];
  return (
    <nav className={style.navContainer}>
      <div className={style.logoPos}>
        <Link to="/" className={style.logo}>
          DoEat fest
        </Link>
      </div>
      <div className={style.leftContainer}>
        <div className={style.navButtonPos}>
          <Link to="/participate">
            <button className={style.navButton} type="submit">
              Участвовать
            </button>
          </Link>
        </div>
        <Link to="/calendar">
          <div className={style.navCalendarPos}>
            <button className={style.navCalendar} type="submit">
              <img src="svg/Calendar.svg" alt="calendar" />
            </button>
          </div>
        </Link>
        {/* <div className={style.navMenuPos}>
          <button className={style.navMenu} type="submit">
            <img src="svg/List.svg" alt="list" />
          </button>
        </div> */}
        <div className={style.burgerBtn} onClick={() => setMenuActive(!menuActive)} >
          <span />
        </div>
        <Menu active={menuActive} setActive={setMenuActive} header="Меню" items={items} />
      </div>
    </nav>
  );
}

export default Navbar;
