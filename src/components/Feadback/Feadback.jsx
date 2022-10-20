import { Component } from 'react';
import css from './Feadback.module.css';
import { FeadbackOptions } from './FeadbackOptions';
import { Statistics } from './Statistics';
import { ButtonMap } from '../../data/ButtonsMap';

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
          array={ButtonMap}
        />
        <div className={this.getSumm() > 0 ? css.notificBox1 : css.notificBox}>
          <h2 className={css.notificTitle}>There is not feadback</h2>
        </div>
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          onCountTotalFeadback={countTotalFeadback}
          onGetSumm={this.getSumm()}
        />
      </div>
    );
  }
}
