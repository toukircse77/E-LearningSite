import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
        <Header></Header>
        <Container>
            <Row>
                <Col lg="8">
                    <Outlet></Outlet>
                </Col>
                <Col lg="4">catagores</Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;