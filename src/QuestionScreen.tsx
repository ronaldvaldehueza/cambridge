import React from 'react';
import { Question } from './types';
import { TextWithBoldface } from './Toolbox';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';


interface QuestionScreenProps {
  currentQuestionCategory: string;
  currentQuestion: Question;
  onUserAnswer: (userAnswer: boolean) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ currentQuestionCategory, currentQuestion, onUserAnswer }) => {

  return (
    <div className="App vh-100 d-flex align-items-center">
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={11} md={8} lg={8} className="px-0 border border-info vcrontheme-bg vcrontheme-shadow">
                    <h6 className="fs-7 text-info text-start ps-4 pt-4">{currentQuestionCategory}</h6>
                    <h1 className="fs-7 text-info text-start ps-4 py-4">Q{currentQuestion.order}.</h1>
                    <div className="fc-norm bg-light fs-6 text-start border-top border-bottom border-info ps-4 py-4"><TextWithBoldface text={currentQuestion.stimulus}></TextWithBoldface>
                    </div>
                    <div className="row py-5">
                      <div className="d-grid col">
                        <Button onClick={() => onUserAnswer(true)} variant="outline-info" size="lg" className="bare"> Correct </Button>
                      </div>
                      <div className="d-grid col">
                        <Button onClick={() => onUserAnswer(false)} variant="outline-info" size="lg" className="bare"> Incorrect </Button>
                      </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );

}

export default QuestionScreen;



