import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-3 bg-light border-top">
      <Container>
        <Row>
          <Col className="text-center text-muted">
            <small>© {currentYear} Denih Handoko. Built with React.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
