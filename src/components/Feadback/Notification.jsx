import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ onGetSumm }) => {
  return (
    <div className={onGetSumm > 0 ? css.notificBox1 : css.notificBox}>
      <h2 className={css.notificTitle}>There is not feadback</h2>
    </div>
  );
};

Notification.propTypes = {
  onGetSumm: PropTypes.number.isRequired,
};
