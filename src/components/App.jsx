import React, { Component } from 'react';
import css from './feadback/Feadback.module.css';

export class FeadbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  percentage = {
    initial: 100,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      visible: true,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      visible: true,
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
    return (
      <div className={css.box}>
        <h2 className={css.title}>Please leave feedback</h2>
        <button type="button" onClick={this.goodIncrement}>
          Good
        </button>
        <button type="button" onClick={this.neutralIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.badIncrement}>
          Bad
        </button>
        <h2>Statistics</h2>
        {/* {this.state.visible || <div>There is no feedback</div>} */}
        {this.getSumm() > 0 && (
          <ul className={css.statList}>
            <li className={css.statItem}>
              <p className={css.statInfo}>Good</p>
              <span>{this.state.good}</span>
            </li>
            <li className={css.statItem}>
              <p className={css.statInfo}>Neutral</p>
              <span>{this.state.neutral}</span>
            </li>
            <li className={css.statItem}>
              <p className={css.statInfo}>Bad</p>
              <span>{this.state.bad}</span>
            </li>
            <li className={css.statItem}>
              <p className={css.statInfo}>Total</p>
              <span>{this.getSumm()}</span>
            </li>
            <li className={css.statItem}>
              <p className={css.statInfo}>Positive feedback</p>
              <span>
                {this.percentage.initial &&
                  (this.percentage.initial /
                    (this.state.good +
                      this.state.neutral * 0.5 +
                      this.state.bad)) *
                    this.state.good}
                %
              </span>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
