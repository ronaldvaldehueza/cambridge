import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Question } from './types';
import CheckAnswersList from './CheckAnswers';

interface ScoreScreenProps {
    categoryQuestions: Question[];
    currentQuestionCategory: string;
    score: number;
    maxScore: number;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({categoryQuestions, currentQuestionCategory, score, maxScore}) => {
    return (
        <div className="App vh-100 d-flex align-items-center">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={10} md={4} lg={4} className="px-0 border border-info vcrontheme-bg vcrontheme-shadow">
                        <h6 className="fs-7 text-info text-center ps-4 pt-4">{currentQuestionCategory}</h6>
                        <h1 className="fs-7 text-info text-center ps-4 py-4">Results</h1>
                        <p className="fc-norm bg-light fs-6 text-center border-top border-bottom border-info ps-4 py-4">Your score is: {score} out of {maxScore}</p>
                        <div className="pb-4">
                        <CheckAnswersList questions={categoryQuestions}/>
                        </div>
                        <div className="py-5 border-top border-info-subtle"><Link to="/" className="text-info">Home</Link></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ScoreScreen;