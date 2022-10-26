import React from 'react';
import css from '../Feedback.module.css';
import PropTypes from 'prop-types';

export const FeadbackOptions = ({ onHandleIncrement, onArrBtn }) => {
  return (
    <>
      {onArrBtn.map(item => (
        <button
          style={{ textTransform: 'capitalize' }}
          key={item.name}
          name={item.name}
          type="button"
          className={css.button}
          onClick={onHandleIncrement}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

FeadbackOptions.propTypes = {
  onHandleIncrement: PropTypes.func,
  onArrBtn: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
