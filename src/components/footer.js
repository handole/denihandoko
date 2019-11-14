import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div>
      <Container>
        <br />
        <Row>
          <Col sm="10">
            <p style={myFooter}>@denihandoko - portofolio 2019</p>
          </Col>
          <Col sm="2">
            <p style={myFooter}></p>
          </Col>
        </Row>
        
      </Container>
      </div>
    )
  }
}

export default Footer;

const myFooter = {
  color: "grey",
  fontSize: "11px"
}