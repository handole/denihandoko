import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Developer',
    company: 'Hyperscal Digital Indonesia',
    location: 'Jakarta',
    period: '12/2025 – Present',
    tech: 'Golang (Gin), Next JS, RESTful APIs, Kafka, Document Parsing',
    responsibilities: [
      'Architected payment parsing services handling multi-format payment payloads with high accuracy.',
      'Engineered automated document parsing pipelines extracting and transforming invoice datasets into structured records, reducing manual processing time by ~60%.',
      'Migrated and refactored core RESTful API endpoints from Django (Python) to Go (Gin), achieving a ~45% reduction in API response latency.',
      'Re-architected legacy Java services into modular Go (Gin) microservices to streamline system resource usage and maintain peak traffic stability.',
      'Developed and integrated CRM revenue management modules to track financial reconciliations.'
    ]
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'Gramedia Digital',
    location: 'Jakarta',
    period: '03/2022 – 08/2025',
    tech: 'RESTful APIs, Python (FastAPI), MongoDB, Redis, Midtrans, Xendit, B2B/B2C Integrations',
    responsibilities: [
      'Engineered and scaled high-throughput RESTful APIs serving thousands of daily active users across B2B and B2C digital commerce channels.',
      'Integrated payment gateways (Midtrans, Xendit) with automated webhook retries and callback validation, cutting transaction failure rates.',
      'Built Mitra Dashboard and automated marketplace airwaybill generation, reducing shipping manifest processing from hours to minutes.',
      'Enhanced wholesale and dynamic promotional campaign engines to accommodate seasonal flash sales with low Redis cache latency.',
      'Delivered new tier membership rewards system supporting marketing loyalty programs.'
    ]
  },
  {
    id: 3,
    role: 'Fullstack Developer',
    company: 'PT. Dipantara Inovasi Teknologi',
    location: 'Jakarta',
    period: '12/2019 – 08/2022',
    tech: 'Python (Django, Flask), PostgreSQL, Bootstrap, Neo4j, Elasticsearch, Cronjob',
    responsibilities: [
      'Built automated scraping tools for YouTube and TikTok data ingestion using Flask, handling daily scheduled batch jobs.',
      'Implemented robust task scheduling and error alerting via Cronjob for uninterrupted data harvesting.',
      'Developed data-driven web applications with Django, Bootstrap, and PostgreSQL.',
      'Integrated Flask backend with Neo4j graph database, Elasticsearch full-text search, and Evello analytics API.'
    ]
  },
  {
    id: 4,
    role: 'Fullstack Developer',
    company: 'SOSARO',
    location: 'Jakarta',
    period: '06/2019 – 10/2019',
    tech: 'Python (Django, Flask), PostgreSQL, REST APIs',
    responsibilities: [
      'Created project management web applications using Flask, Bootstrap, and PostgreSQL.',
      'Built secured REST APIs using Django for mobile client consumption.'
    ]
  },
  {
    id: 5,
    role: 'Fullstack Developer',
    company: 'CoderDojo',
    location: 'Yogyakarta',
    period: '04/2018 – 04/2019',
    tech: 'Python (Django), Vue.js, Jira, Bitbucket',
    responsibilities: [
      'Developed fullstack web applications using Django backend and Vue.js reactive frontend.',
      'Enhanced user experience and backend processing workflows across sprint releases.',
      'Managed agile sprint tasks in Jira and maintained version control workflows with Bitbucket.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="py-4">
      <h3 className="mb-4">Work Experience</h3>
      {experiences.map((item) => (
        <Card key={item.id} className="mb-4 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
          <CardBody>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-1">
              <h5 className="font-weight-bold mb-1 mb-md-0 text-dark">
                {item.role} <span className="font-weight-normal text-muted">— {item.company}, {item.location}</span>
              </h5>
              <Badge color="light" className="text-secondary border px-2 py-1 align-self-start align-self-md-auto" style={{ fontSize: '12px' }}>
                {item.period}
              </Badge>
            </div>
            {item.tech && (
              <p className="text-muted mb-3" style={techStyle}>
                <span className="font-weight-bold">Tech:</span> {item.tech}
              </p>
            )}
            <ul className="mb-0 pl-3 text-secondary" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
              {item.responsibilities.map((bullet, idx) => (
                <li key={idx} className="mb-1">{bullet}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Experience;

const techStyle = {
  fontSize: '13px',
  fontStyle: 'italic'
};
