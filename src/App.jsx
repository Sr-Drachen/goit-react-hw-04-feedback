import { useState } from 'react';
import FeedBack from './components/FeedBack/FeedBack';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = option => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default: {
        console.log('There is no such option');
      }
    }
  };
  const countTotalFeedback = () => {
    const values = [good, neutral, bad];
    const totalFeedback = values.reduce((total, value) => (total += value), 0);
    return totalFeedback;
  };

	const total = countTotalFeedback();
	
	const countPositiveFeedbackPercentage = total => {
    const percetnage = Math.round((good * 100) / total);

    return percetnage;
  };
		
  return (
    <>
      <Section title="Please leave feedback">
        <FeedBack
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        ) : (
          <Notification message="No feedback given"/>
        )}
      </Section>
    </>
  );
};



export default App;