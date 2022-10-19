import React from 'react';
import css from './Feadback.module.css';

export const FeadbackOptions = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => {
  return (
    <>
      <button type="button" className={css.button} onClick={onGoodIncrement}>
        Good
      </button>
      <button type="button" className={css.button} onClick={onNeutralIncrement}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={onBadIncrement}>
        Bad
      </button>
    </>
  );
};
