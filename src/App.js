import { useState, useEffect } from 'react';

import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {});

  const leaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        return setGood(good + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    let positiveFeedbackPercentage = 0;

    if (good) {
      positiveFeedbackPercentage = (good * 100) / total;
    }

    return Math.round(positiveFeedbackPercentage);
  };

  let totalFeedback = countTotalFeedback();
  let positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {!totalFeedback ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
}
