import React, { Component } from 'react';
import css from './Feadback.module.css';
import { FeadbackOptions } from './FeadbackOptions';

export class Feadback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  getSumm = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const summPercentage = (
      100 && (100 / (good + neutral * 0.5 + bad)) * good
    ).toFixed(2);
    return (
      <div className={css.box}>
        <h2 className={css.title}>Please leave feedback</h2>

        {/* <button
          type="button"
          className={css.button}
          onClick={this.goodIncrement}
        >
          Good
        </button>
        <button
          type="button"
          className={css.button}
          onClick={this.neutralIncrement}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.button}
          onClick={this.badIncrement}
        >
          Bad
        </button> */}

        <FeadbackOptions
          onGoodIncrement={this.goodIncrement}
          onNeutralIncrement={this.neutralIncrement}
          onBadIncrement={this.badIncrement}
        />

        <h2>Statistics</h2>
        <ul className={this.getSumm() > 0 ? css.statList : css.statList1}>
          <li className={css.statItem}>
            <p className={css.statInfo}>Good:</p>
            <span>{good}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Neutral:</p>
            <span>{neutral}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Bad:</p>
            <span>{bad}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Total:</p>
            <span> {this.getSumm()}</span>
          </li>
          <li className={css.statItem}>
            <p className={css.statInfo}>Positive feedback</p>
            <span>
              {`${summPercentage} %`}
              {summPercentage > 50 ? (
                <img
                  className={css.smile}
                  src="http://simpleicon.com/wp-content/uploads/smile.png"
                  width="20px"
                  height="20px"
                  alt="smile"
                />
              ) : (
                <img
                  className={css.smile}
                  src="http://simpleicon.com/wp-content/uploads/sad.png"
                  width="20px"
                  height="20px"
                  alt="smile"
                />
              )}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
