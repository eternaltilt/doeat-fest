/* eslint-disable react/prop-types */
import React from 'react';
import style from './Comment.module.css'

function Comment({ username, text }) {
  return (
    <div className={style.manager}>
      <h5 className={style.name}>{username}</h5>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default Comment;
