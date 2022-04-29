/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import style from './Navbar.module.css';

function Navbar() {
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
        <div className={style.navMenuPos}>
          <button className={style.navMenu} type="submit">
            <img src="svg/List.svg" alt="list" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
