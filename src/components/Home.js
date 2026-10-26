import React from 'react';
import { Jumbotron, Button, Row, Col, Card, CardBody, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'Golang', 'JavaScript']
  },
  {
    category: 'Backend',
    skills: ['Django', 'FastAPI', 'Flask', 'Gin', 'RESTful APIs', 'Microservices']
  },
  {
    category: 'Databases & Caching',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kafka']
  },
  {
    category: 'Frontend & UI',
    skills: ['Vue.js', 'Next.JS', 'Bootstrap', 'HTML5', 'CSS3']
  },
  {
    category: 'Tools & Infra',
    skills: ['RabbitMQ', 'Cronjob', 'Jira', 'Bitbucket', 'Git']
  }
];

const Home = () => {
  return (
    <div className="py-2">
      <Jumbotron className="bg-light p-4 p-md-5 rounded shadow-sm mb-4">
        <h1 className="display-4 font-weight-bold">Hello, world!</h1>
        <p className="lead mt-3 text-secondary">
          I am <strong>Denih Handoko</strong>, a <strong>Software Engineer — Python | Golang</strong> with 6+ years of experience building scalable APIs and high-performance backend systems.
        </p>
        <hr className="my-4" />
        <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '15.5px' }}>
          Strong in <strong>Python</strong> (FastAPI, Django, Flask) and <strong>Golang</strong> (Gin) for high-performance needs. Experienced in e-commerce, promo engines, document parsing pipelines, and payment integration systems. Focused on turning complex logic into clean, reliable, and maintainable code. Open to remote and hybrid roles.
        </p>
        <div className="mt-4">
          <Button tag={Link} to="/experience" color="dark" className="mr-2 mb-2">
            View Experience
          </Button>
          <Button tag={Link} to="/portofolio" outline color="dark" className="mr-2 mb-2">
            View Projects
          </Button>
          <Button
            tag="a"
            href="/CV_Denih_Handoko.pdf"
            download="CV_Denih_Handoko.pdf"
            color="success"
            className="mr-2 mb-2 font-weight-bold"
          >
            Download CV (PDF)
          </Button>
          <Button
            tag="a"
            href="https://www.linkedin.com/in/denih-handoko-79584656"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            outline
            className="mb-2"
          >
            LinkedIn Profile ↗
          </Button>
        </div>
      </Jumbotron>

      <div className="mb-4">
        <h3 className="mb-3 font-weight-bold">Technical Skills</h3>
        <Row>
          {skillCategories.map((group) => (
            <Col md="6" lg="4" key={group.category} className="mb-3">
              <Card className="h-100 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
                <CardBody>
                  <h6 className="font-weight-bold text-dark mb-2">{group.category}</h6>
                  <div>
                    {group.skills.map((skill) => (
                      <Badge
                        color="dark"
                        key={skill}
                        className="mr-1 mb-1 font-weight-normal px-2 py-1"
                        style={{ fontSize: '12px' }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
