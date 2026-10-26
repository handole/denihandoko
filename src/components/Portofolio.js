import React, { Component } from 'react';
import {
  Card, CardBody, CardTitle, CardText,
  Badge, Button, Row, Col
} from 'reactstrap';

const projects = [
  {
    id: 'chemistfun',
    title: 'ChemistFun',
    description: 'Virtual chemistry lab simulator powered by LLM integration to simulate realistic chemical experiments safely.',
    techStack: ['Python', 'FastAPI', 'Vue.js', 'LLM', 'Virtual Lab', 'PostgreSQL'],
    githubUrl: 'https://github.com/handole/chemistfun'
  },
  {
    id: 'customer-pipeline',
    title: 'Customer Pipeline',
    description: 'Data ingestion and ETL pipeline for processing customer event streams, transformation, and analytical reporting.',
    techStack: ['Python', 'ETL', 'Data Pipeline', 'PostgreSQL'],
    githubUrl: 'https://github.com/handole/customer-pipeline'
  },
  {
    id: 'ginapi',
    title: 'Gin API Base',
    description: 'Production-ready RESTful API starter boilerplate built with Golang, Gin Gonic framework, and modular architecture.',
    techStack: ['Go', 'Gin', 'REST API'],
    githubUrl: 'https://github.com/handole/ginapi'
  },
  {
    id: 'fastapi',
    title: 'FastAPI Base',
    description: 'High-performance asynchronous REST API boilerplate built on FastAPI, Pydantic validation, and clean architecture.',
    techStack: ['Python', 'FastAPI', 'AsyncIO'],
    githubUrl: 'https://github.com/handole/fastapi_'
  },
  {
    id: 'bookborrow',
    title: 'Book Borrow',
    description: 'Book rental and library inventory service managing loans, returns, and catalog state tracking.',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    githubUrl: 'https://github.com/handole/bookborrow'
  },
  {
    id: 'fastllm',
    title: 'FastLLM',
    description: 'Restful API service for parsing and extracting structured data from unstructured text using NLP techniques.',
    techStack: ['Python', 'LLM', 'Fastapi'],
    githubUrl: 'https://github.com/handole/fast-llm'
  },
  {
    id: 'gurupro',
    title: 'GuruPro',
    description: 'EdTech management platform designed for educators to streamline digital class management and student workflows.',
    techStack: ['Python', 'Web App', 'EdTech'],
    githubUrl: 'https://github.com/handole/GuruPro'
  }
];

class Portofolio extends Component {
  render() {
    return (
      <div className="py-4">
        <h3 className="mb-4">Featured Projects</h3>
        <Row>
          {projects.map((project) => (
            <Col sm="6" key={project.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
                <CardBody className="d-flex flex-column justify-content-between">
                  <div>
                    <CardTitle tag="h5" className="font-weight-bold text-dark">
                      {project.title}
                    </CardTitle>
                    <div className="mb-3">
                      {project.techStack.map((tech) => (
                        <Badge color="secondary" className="mr-1" key={tech}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <CardText className="text-muted" style={{ fontSize: '14px' }}>
                      {project.description}
                    </CardText>
                  </div>
                  <div className="pt-3">
                    <Button
                      color="dark"
                      size="sm"
                      outline
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Portofolio;
