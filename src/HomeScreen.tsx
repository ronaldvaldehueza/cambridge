import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';


interface HomeScreenProps {
    quizTitle: string;
    quizSubTitle: string;
    onCategoryChoice: (categoryChoice: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({quizTitle, onCategoryChoice}) => {
    return (
    <div className="App vh-100 d-flex align-items-center">
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={9} md={5} lg={5} className="px-0 border border-info vcrontheme-bg vcrontheme-shadow">
                    <h6 className="fc-norm pt-2 pt-5">CAE</h6>
                    <h1 className="fc-norm py-5">{quizTitle}</h1>
                    <div className="d-grid">
                    <div className="border-top border-info-subtle"></div>
                    <Button onClick={() => onCategoryChoice('ActivityTypeOne')} variant="outline-info" size="lg" className="bare">Activity One</Button>
                    <div className="border-top border-info-subtle"></div>
                    <Button onClick={() => onCategoryChoice('ActivityTypeTwo')} variant="outline-info" size="lg" className="bare">Activity Two</Button>
                    <div className="border-top border-info-subtle"></div>
                    <Button onClick={() => onCategoryChoice('ActivityTypeThree')} variant="outline-info" size="lg" disabled className="bare">Activity Three</Button>
                    <div className="border-top border-info-subtle"></div>
                    <Button onClick={() => onCategoryChoice('ActivityTypeFour')} variant="outline-info" size="lg" disabled className="bare">Activity Four</Button>
                    <div className="border-top border-info-subtle"></div>
                    <Button onClick={() => onCategoryChoice('ActivityTypeFive')} variant="outline-info" size="lg" disabled className="bare">Activity Five</Button>
                    <div className="border-top border-info-subtle"></div>
                    <Button onClick={() => onCategoryChoice('Results')} variant="outline-info" size="lg" disabled className="bare py-4">Results</Button>
                    <div className="pb-6"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default HomeScreen;