import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, 
  Row, Col
} from 'reactstrap';

class Portofolio extends Component {
  render() {
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/todo.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Todo List</CardTitle>
              <CardText>Todo list app, using django restfull and react js.</CardText>
              
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/socomm.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Socomm</CardTitle>
              <CardText>Post monitoring client project for software agensi, develop using flask, bootstrap and postgresql.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/jobstaffing.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Job Staffing</CardTitle>
              <CardText>Hiring jobseeker for HR, webapp with develop using django, bootstrap and postgresql.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/pesonamalahayu.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Pesona Malahayu</CardTitle>
              <CardSubtitle>Portal Local Tourism</CardSubtitle>
              <CardText>Post blog and portal local tourism, develop using django, bootstrap and postgresql.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/relawan.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Volunteer Monitoring</CardTitle>
              <CardText>Volunteer monitoring for senator, develop using django, bootstrap and postgresql.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/crbtoyota.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Sales area Toyota Car</CardTitle>
              <CardText>Sales promotion Toyota, develop using django, bootstrap and postgresql.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://handole.github.io/assets/img/portfolio/home-pc.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>pecanducoffee</CardTitle>
              <CardText>website coffee shop, with coffee bean from preanger in West Java Indonesia. Just selling original brewer bean this place. 
                This project using Bootstrap for landing page, python django for backend with cellery and many more for this website.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>      
    )
  }
}

export default Portofolio;