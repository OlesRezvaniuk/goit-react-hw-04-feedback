import React from 'react';
import css from '../Feedback.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onCountTotalFeadback,
  onGetSumm,
}) => {
  return (
    <>
      <div className={onGetSumm > 0 ? css.statBox : css.statBox1}>
        <h2 className={css.statTitle}>Statistics</h2>
        <ul className={css.statList}>
          <li className={css.statItem}>
            <p className={css.statInfo}>Good:</p>
            <span>{onGood}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Neutral:</p>
            <span>{onNeutral}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Bad:</p>
            <span>{onBad}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Total:</p>
            <span> {onGetSumm}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Positive feedback</p>
            <span className={css.statPerc}>
              {`${onCountTotalFeadback} %`}
              {onCountTotalFeadback > 50 ? (
                <img
                  className={css.smile}
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/tNYZpPkEnbp.png"
                  alt=":)"
                />
              ) : (
                <img
                  className={css.smile}
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/vAd0CBmjF8Y.png"
                  alt=":("
                />
              )}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onCountTotalFeadback: PropTypes.string.isRequired,
  onGetSumm: PropTypes.number.isRequired,
};
