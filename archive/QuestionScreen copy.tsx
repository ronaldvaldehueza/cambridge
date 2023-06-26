import React, { useState } from 'react';

import { Question } from './types';


interface QuestionScreenProps {
  question: Question;
  options: string[];
  onSubmit: (selectedOption: string) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, options, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(selectedOption);
  };

  return (
    <div>
      <h1>{question.stimulus}</h1>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              onChange={handleChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default QuestionScreen;
