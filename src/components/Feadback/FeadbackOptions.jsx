import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

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

FeadbackOptions.propTypes = {
  onHandleIncrement: PropTypes.object.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
