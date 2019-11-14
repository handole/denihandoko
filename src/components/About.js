import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, CardImg } from 'reactstrap';
import about from './assets/about.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <br />
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col sm="4">
                <CardImg style={myImg} src={about} alt={"about"} />
              </Col>
              <Col sm="8">
                <h5>Introduction</h5>
                <br />
                <Row>
                  <Col sm="2">
                    <p style={conText}>Name</p>
                    <p style={conText}>Address</p>
                    <p style={conText}>Education</p>
                    <p style={conText}>Mobile</p>
                    <p style={conText}>E-mail</p>
                    
                  </Col>
                  <Col sm="10">
                    <p style={conText}>: Denih Handoko</p>
                    <p style={conText}>: Jl. Ust Abbas no 18 RT 02 RW 12 Kauman Brebes</p>
                    <p style={conText}>: Un-graduated on 6 semester PKN STMIK LPKIA</p>
                    <p style={conText}>: +62 899 666 9727</p>
                    <p style={conText}>: denihhandoko@gmail</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default About;


const myImg = {
  width: "260px",
  height: "340px",
  borderRadius: "50%",
  position: "center"
}

const conText = {
  color: "grey",
  fontSize: "12px"
}