import { Component } from 'react';
import css from './Feedback.module.css';
import { FeadbackOptions } from './FeadbackOptions/FeadbackOptions';
import { Statistics } from './Statistics/Statistics';
import { ButtonMap } from '../../data/ButtonsMap';
import { Notification } from './Notification/Notification';

export class Feadback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  getSumm = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeadback = (
      100 && (100 / (good + neutral * 0.5 + bad)) * good
    ).toFixed(2);

    return (
      <div className={css.box}>
        <h2 className={css.title}>Please leave feedback</h2>
        <FeadbackOptions
          onHandleIncrement={this.handleIncrement}
          stateKeys={Object.keys(this.state)}
        />
        <Notification onGetSumm={this.getSumm()} />
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          // onOptions={this.state}
          onCountTotalFeadback={countTotalFeadback}
          onGetSumm={this.getSumm()}
        />
      </div>
    );
  }
}
