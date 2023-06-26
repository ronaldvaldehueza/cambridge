import React from 'react';
import { Question } from './types';

import { Row, Col } from 'react-bootstrap';
import './App.css';


interface CheckAnswersListProps {
    questions: Question[];
  }

const CheckAnswersList: React.FC<CheckAnswersListProps> = ({ questions }) => {
    return (
        <Row className="justify-content-center">
            <Col xs={11} md={11} lg={11} >
                {questions.map((question, index) => (
                    <>
                        {question.feedback === 'Round' && 
                        <Row className="justify-content-center">
                            <Col className="text-info pt-4 pt-2" col="2" style={{background: "rgba(255,255,255,0.5)"}}>{question.feedback + ' ' + question.order}</Col>
                        </Row>}
                        {question.feedback !== 'Round' && 
                        <Row className="justify-content-center" key={index}>
                            <Col className="text-info py-1">Q{question.order}</Col>
                            <Col className="text-info py-1">{question.is_correct === (!!question.user_answers[0]) ? 'Correct' : 'Wrong'}</Col>
                        </Row>
                        }
                    </>
                ))}
            </Col>
        </Row>
    );
}
  
  export default CheckAnswersList;
  