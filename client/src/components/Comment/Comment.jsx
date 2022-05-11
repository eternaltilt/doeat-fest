/* eslint-disable react/prop-types */
import React from 'react';

function Comment({ username, text }) {
  return (
    <div>
      <p>{username}</p>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
