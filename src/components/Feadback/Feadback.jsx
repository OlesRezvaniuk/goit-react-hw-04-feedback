import { useState } from 'react';
import css from './Feedback.module.css';
import { FeadbackOptions } from './FeadbackOptions/FeadbackOptions';
import { Statistics } from './Statistics/Statistics';
import { ButtonMap } from '../../data/ButtonsMap';
import { Notification } from './Notification/Notification';

export const Feadback = () => {
  const ArrBtn = [
    { name: 'good', title: 'Good' },
    { name: 'neutral', title: 'Neutral' },
    { name: 'bad', title: 'Bad' },
  ];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    if (e.target.name === 'good') {
      setGood(state => state + 1);
    } else if (e.target.name === 'neutral') {
      setNeutral(state => state + 1);
    } else if (e.target.name === 'bad') {
      setBad(state => state + 1);
    }
  };

  const getSumm = good + neutral + bad;

  const countTotalFeadback = (
    100 && (100 / (good + neutral * 0.5 + bad)) * good
  ).toFixed(2);

  return (
    <div className={css.box}>
      <h2 className={css.title}>Please leave feedback</h2>
      <FeadbackOptions onHandleIncrement={handleIncrement} onArrBtn={ArrBtn} />
      <Notification onGetSumm={getSumm} />
      <Statistics
        onGood={good}
        onNeutral={neutral}
        onBad={bad}
        onCountTotalFeadback={countTotalFeadback}
        onGetSumm={getSumm}
      />
    </div>
  );
};
