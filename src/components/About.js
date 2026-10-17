import React from 'react';
import { Jumbotron, Container, Row, Col, CardImg } from 'reactstrap';
import about from './assets/about.jpg';

const About = () => {
  return (
    <div className="py-4">
      <Jumbotron className="bg-light p-4 rounded shadow-sm">
        <Container fluid>
          <Row className="align-items-center">
            <Col sm="4" className="text-center mb-3 mb-sm-0">
              <CardImg style={myImg} src={about} alt="Denih Handoko" />
            </Col>
            <Col sm="8">
              <h4 className="mb-3 font-weight-bold">Introduction</h4>
              <Row>
                <Col sm="3" xs="4">
                  <p className="font-weight-bold text-muted mb-2">Name</p>
                  <p className="font-weight-bold text-muted mb-2">Location</p>
                  <p className="font-weight-bold text-muted mb-2">Education</p>
                  <p className="font-weight-bold text-muted mb-2">E-mail</p>
                </Col>
                <Col sm="9" xs="8">
                  <p className="mb-2">: Denih Handoko</p>
                  <p className="mb-2">: Brebes, Jawa Tengah, Indonesia</p>
                  <p className="mb-2">: PKN STMIK LPKIA</p>
                  <p className="mb-2">: <a href="mailto:handokodenih@gmail.com" className="text-dark">handokodenih@gmail.com</a></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;

const myImg = {
  width: '220px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '50%',
  margin: '0 auto'
};
