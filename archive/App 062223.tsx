import React, { useState, useEffect } from 'react';
import QuestionScreen from './QuestionScreen'; // your custom QuestionScreen component
import ScoreScreen from './ScoreScreen'; // your custom ScoreScreen component

import { QuizData } from './types';

function App() {
  const [data, setData] = useState<QuizData | null>(null);
  const [activityIndex, setActivityIndex] = useState(0); // to track the current activity
  const [questionIndex, setQuestionIndex] = useState(0); // to track the current question
  const [score, setScore] = useState(0); // to track the user's score

  useEffect(() => {
    fetch('https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  // get the current question
  const question = data.activities[activityIndex].questions[questionIndex];

  // handle a user's answer
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Next question...
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < data.activities[activityIndex].questions.length) {
      setQuestionIndex(nextQuestionIndex);
    } else {
      // if there are no more questions in the current activity, move to the next activity
      const nextActivityIndex = activityIndex + 1;
      if (nextActivityIndex < data.activities.length) {
        setActivityIndex(nextActivityIndex);
        setQuestionIndex(0);
      } else {
        // if there are no more activities, the game is over
        return <ScoreScreen score={score} total={data.activities.reduce((total, activity) => total + activity.questions.length, 0)} />;
      }
    }
  };

  return (
    <div>
      <QuestionScreen question={question} onAnswer={handleAnswer} />
    </div>
  );
}

export default App;
