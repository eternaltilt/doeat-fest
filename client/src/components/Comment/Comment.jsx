/* eslint-disable react/prop-types */
import React from 'react';
import style from './Comment.module.css'

function Comment({ username, text }) {
  return (
    <div className={style.manager}>
      <p>{username}</p>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
