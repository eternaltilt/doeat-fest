/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Menu.css';

function Menu({ header, items, active, setActive }) {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header"> {header} </div>
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}> {item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
