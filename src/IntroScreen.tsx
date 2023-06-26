import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './App.css';


interface IntroScreenProps {
  currentQuestionCategory: string[];
}

const QuestionScreen: React.FC<IntroScreenProps> = ({ currentQuestionCategory }) => {

  return (
    <div className="App vh-100 d-flex align-items-center">
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={11} md={8} lg={8} className="px-0 border border-info vcrontheme-bg vcrontheme-shadow">
                    <h6 className="fs-7 text-info text-start ps-4 pt-4">{currentQuestionCategory[2] === '' ? '' : currentQuestionCategory[0]}</h6>
                    <h1 className="fs-7 text-info text-start ps-4 py-5">{currentQuestionCategory[2] === '' ? currentQuestionCategory[0] : currentQuestionCategory[2]}</h1>
                    <div className="py-5"></div>
                    <div className="border-top border-info-subtle fs-6 fc-norm text-center px-5 py-5">Quiz starts in 3 seconds...</div>
                </Col>
            </Row>
        </Container>
    </div>
  );

}

export default QuestionScreen;



