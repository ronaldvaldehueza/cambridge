import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Question, Round, Quiz } from './types';
import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';
import QuestionScreen from './QuestionScreen';
import ScoreScreen from './ScoreScreen';
import { useDelayedNavigate } from './Toolbox';
import Ambiance from './Ambiance';

import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  const [quizSource, setQuizSource] = useState<Quiz | null>(null);

  const [roundCounter, setRoundCounter] = useState(0);  // Tracks current round when applicable
  const [questionCounter, setQuestionCounter] = useState(0);  // Tracks current question
  const [activityType, setActivityType] = useState('ActivityTypeTwo');  // Defines activity type, ie Type One (without Round) or Two (with Round)
  const [score, setScore] = useState(0);  // Tracks user's score
  const [maxScore, setMaxScore] = useState(0);  // Holds max score of the quiz
  const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);

  const navigate = useNavigate();
  const delayNavigate = useDelayedNavigate();

  let currentQuestionCategory = ['category', 'category / round', 'round'];
  let isCurrentQuestionCorrect = false;
  let currentQuestion: Question = {
    is_correct: false,
    stimulus: "Fetching data...",
    order: 0,
    user_answers: [],
    feedback: ""
  };


  useEffect(() => {
    fetch('https://www.worldcloud7.com/portfolio/cors/quizdataset.php')
      .then(response => response.json())
      .then(data => setQuizSource(data))
      .catch(error => console.error(error));
  }, []);

  if (!quizSource) return <p>Fetching data...</p>;

  const setCurrentQuestionText = () => {
    if (activityType === 'ActivityTypeOne') {
      currentQuestionCategory[0] = quizSource.activities[0].activity_name;
      currentQuestionCategory[1] = ''; 
      currentQuestionCategory[2] = '';

      currentQuestion = (quizSource.activities[0].questions[questionCounter] as Question);

      isCurrentQuestionCorrect = (quizSource.activities[0].questions[questionCounter] as Question).is_correct;

    } else if (activityType === 'ActivityTypeTwo') {
      currentQuestionCategory[0] = quizSource.activities[1].activity_name;
      currentQuestionCategory[1] = quizSource.activities[1].activity_name + ' / ' + (quizSource.activities[1].questions[roundCounter] as Round).round_title;
      currentQuestionCategory[2] = (quizSource.activities[1].questions[roundCounter] as Round).round_title;

      currentQuestion = (quizSource.activities[1].questions[roundCounter] as Round).questions[questionCounter];

      isCurrentQuestionCorrect = (quizSource.activities[1].questions[roundCounter] as Round).questions[questionCounter].is_correct;
    }

  }

  // Reset state values
  const processCategoryChoice = (activityType: string) => {
    setRoundCounter(0);
    setQuestionCounter(0);
    setScore(0);
    setMaxScore(0);
    setCategoryQuestions([]);
    if (activityType === 'ActivityTypeTwo') {
      setCategoryQuestions(prevQuestions => [...prevQuestions, { is_correct: false, 
        stimulus: '', 
        order: 1, 
        user_answers: [], 
        feedback: 'Round' }]);
    }

    setActivityType(activityType);
    navigate('/intro');
    delayNavigate('/question', 3000);
  }

  const processUserAnswer = (userAnswer: boolean) => {
    // Update score 
    if (userAnswer === isCurrentQuestionCorrect) {
      setScore(score + 1);
    }
    if (activityType === 'ActivityTypeOne') {
      (quizSource.activities[0].questions[questionCounter] as Question).user_answers[0] = userAnswer;
    } else if (activityType === 'ActivityTypeTwo') {
      (quizSource.activities[1].questions[roundCounter] as Round).questions[questionCounter].user_answers[0] = userAnswer;
    }

    // Next question?
    if (activityType === 'ActivityTypeOne') {
      if (questionCounter < quizSource.activities[0].questions.length - 1) {
        setQuestionCounter(questionCounter + 1); // Yes, next question
      } else { // Finished all questions
        setCategoryQuestions(prevQuestions => [...prevQuestions, ...(quizSource.activities[0].questions as Question[])]);
        setQuestionCounter(0);
        setMaxScore(quizSource.activities[0].questions.length);
        navigate('/score');
      }

    } else if (activityType === 'ActivityTypeTwo') {
      if (questionCounter < (quizSource.activities[1].questions[roundCounter] as Round).questions.length - 1) {
        setQuestionCounter(questionCounter + 1);
      } else {
        setCategoryQuestions(prevQuestions => [...prevQuestions, ...(quizSource.activities[1].questions[roundCounter] as Round).questions]);
        setQuestionCounter(0);
        setMaxScore(maxScore + (quizSource.activities[1].questions[roundCounter] as Round).questions.length);

        if (roundCounter < quizSource.activities[1].questions.length - 1) { // Next round?
          let incRoundCounter = roundCounter + 1; // Yes, next round, note that roundCounter is 0 based

          setRoundCounter(incRoundCounter); 
          setCategoryQuestions(prevQuestions => [...prevQuestions, { is_correct: false, 
            stimulus: '', 
            order: incRoundCounter + 1 /* + 1 since roundCounter starts at 0 */, 
            user_answers: [], 
            feedback: 'Round' }]);

          alert(`Take the next round?`);

          navigate('/intro');
          delayNavigate('/question', 3000);
        }
        else { // Last Round. Finished all questions in all rounds
          navigate('/score');
        }
      }
    }



  };

  setCurrentQuestionText();

  return (
    <>
      <Ambiance/>
      <Routes>
        <Route path="/intro" element={<IntroScreen currentQuestionCategory={currentQuestionCategory} />} />
        <Route path="/question" element={<QuestionScreen currentQuestionCategory={currentQuestionCategory[1]} currentQuestion={currentQuestion} onUserAnswer={processUserAnswer} />} />
        <Route path="/score" element={<ScoreScreen categoryQuestions={categoryQuestions} currentQuestionCategory={currentQuestionCategory[0]} score={score} maxScore={maxScore} />} />
        <Route path="/" element={<HomeScreen quizTitle={quizSource.name} quizSubTitle={quizSource.heading} onCategoryChoice={processCategoryChoice} />} />
      </Routes>
    </>
  );


};

export default App;