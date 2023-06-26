import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './HomeScreen';
import QuestionScreen from './QuestionScreen';

const question = "Which one is a fruit?";
const options = ["Apple", "Carrot", "Potato", "Onion"];

const handleAnswerSubmit = (selectedOption: string) => {
  console.log(`You selected: ${selectedOption}`);
};


const App: React.FC = () => {
  return (
    <div>
      <HomeScreen/>
      <QuestionScreen
        question={question}
        options={options}
        onSubmit={handleAnswerSubmit}
      />
    </div>
  );
}

export default App;
