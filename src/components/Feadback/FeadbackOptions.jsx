import React from 'react';
import css from './Feadback.module.css';

export const FeadbackOptions = ({ onHandleIncrement, array }) => {
  return (
    <>
      {array.map(arr => (
        <button
          key={arr.name}
          name={arr.name}
          type="button"
          className={css.button}
          onClick={onHandleIncrement}
        >
          {arr.title}
        </button>
      ))}
    </>
  );
};
