import React from 'react';
import { Jumbotron, Container, Row, Col, CardImg } from 'reactstrap';
import about from './assets/about.jpg';

const About = () => {
  return (
    <div className="py-4">
      <Jumbotron className="bg-light p-4 p-md-5 rounded shadow-sm">
        <Container fluid>
          <Row className="align-items-center">
            <Col md="5" lg="4" className="text-center mb-4 mb-md-0">
              <div style={imgContainerStyle}>
                <CardImg style={myImg} src={about} alt="Denih Handoko" />
              </div>
            </Col>
            <Col md="7" lg="8">
              <h3 className="mb-3 font-weight-bold text-dark">About Me</h3>
              <p className="text-secondary mb-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                Backend & Fullstack Software Engineer with 6+ years of hands-on experience building scalable APIs, event-driven microservices, and robust data integration systems. Specialized in Python (FastAPI, Django, Flask) and Golang (Gin), with deep exposure to e-commerce engines, document parsing pipelines, and automated payment gateways.
              </p>
              <div className="p-3 bg-white rounded shadow-sm border mb-3">
                <Row className="align-items-center">
                  <Col sm="3" xs="4">
                    <p className="font-weight-bold text-muted mb-2">Name</p>
                    <p className="font-weight-bold text-muted mb-2">Location</p>
                    <p className="font-weight-bold text-muted mb-2">Education</p>
                    <p className="font-weight-bold text-muted mb-2">E-mail</p>
                    <p className="font-weight-bold text-muted mb-2">LinkedIn</p>
                    <p className="font-weight-bold text-muted mb-0">CV</p>
                  </Col>
                  <Col sm="9" xs="8">
                    <p className="mb-2 text-dark font-weight-bold">: Denih Handoko</p>
                    <p className="mb-2 text-secondary">: Brebes, Jawa Tengah, Indonesia</p>
                    <p className="mb-2 text-secondary">: PKN STMIK LPKIA (Information Technology)</p>
                    <p className="mb-2">: <a href="mailto:handokodenih@gmail.com" className="text-dark font-weight-bold">handokodenih@gmail.com</a></p>
                    <p className="mb-2">: <a href="https://www.linkedin.com/in/denih-handoko-79584656" target="_blank" rel="noopener noreferrer" className="text-primary font-weight-bold">linkedin.com/in/denih-handoko ↗</a></p>
                    <p className="mb-0">: <a href="/CV_Denih_Handoko.pdf" download="CV_Denih_Handoko.pdf" className="text-success font-weight-bold">Download CV (PDF) ⤓</a></p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;

const imgContainerStyle = {
  display: 'inline-block',
  position: 'relative',
  padding: '6px',
  background: '#ffffff',
  borderRadius: '24px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
};

const myImg = {
  width: '100%',
  maxWidth: '260px',
  height: '320px',
  objectFit: 'cover',
  objectPosition: 'center 20%',
  borderRadius: '20px',
  display: 'block',
  margin: '0 auto'
};
