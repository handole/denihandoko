import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Developer',
    company: 'Hyperscal',
    location: 'Jakarta',
    period: '11/2025 – 10/2026',
    tech: 'Golang (Gin), Next JS, RESTful APIs, Document Parsing',
    responsibilities: [
      'Parsing payment services for payment processing systems.',
      'Built document parsing pipelines to extract and transform invoice data from multiple formats into structured database records.',
      'Migrated and refactored RESTful APIs from Django (Python) to Go (Gin), improving performance and scalability.',
      'Re-architected legacy APIs from Java to Go (Gin) to streamline system efficiency and reduce latency.',
      'Develop CRM modul revenue management.'
    ]
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'Gramedia Digital',
    location: 'Jakarta',
    period: '03/2022 – 08/2025',
    tech: 'RESTful APIs, Midtrans, Xendit, B2B/B2C Integrations',
    responsibilities: [
      'Developed and optimized APIs to support B2B & B2C operations.',
      'Integrated payment gateways (Midtrans, Xendit).',
      'Built Mitra Dashboard and automated marketplace airwaybill systems.',
      'Enhanced wholesale and promotion features for better partner engagement.',
      'Added promo product features to support marketing campaigns.',
      'Integrated the new tier membership system.'
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
      'Built scraping tools for YouTube & TikTok using Flask.',
      'Implemented task scheduling with Cronjob.',
      'Developed applications with Django, Bootstrap, PostgreSQL.',
      'Integrated Flask with Neo4j, Elasticsearch, and Evello API.'
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
      'Created project management apps with Flask & PostgreSQL.',
      'Built REST APIs with Django for mobile integration.'
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
      'Developed fullstack web apps using Django & Vue.js.',
      'Improved frontend & backend features.',
      'Managed sprints in Jira & version control with Bitbucket.'
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
