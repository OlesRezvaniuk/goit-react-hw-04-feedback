import React from 'react';
import css from '../Feedback.module.css';
import PropTypes from 'prop-types';

export const FeadbackOptions = ({ onHandleIncrement, state }) => {
  const arrayState = Object.keys(state);

  console.log(arrayState);
  return (
    <>
      {arrayState.map(arr => (
        <button
          style={{ textTransform: 'capitalize' }}
          key={arr}
          name={arr}
          type="button"
          className={css.button}
          onClick={onHandleIncrement}
        >
          {arr}
        </button>
      ))}
    </>
  );
};

FeadbackOptions.propTypes = {
  onHandleIncrement: PropTypes.func,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
