import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Software Engineer - Sosaro',
    subtitle: 'Juni 2019 – Oktober 2019',
    content: 'Developed backend RESTful APIs with Python to power core mobile application features and integrated third-party services.'
  },
  {
    id: 2,
    title: 'Full Stack Software Engineer - CoderDojo Indonesia',
    subtitle: 'April 2018 – Mei 2019',
    content: 'Engineered an apartment broker web platform for the US market using Python and Django within an Agile team of 4 engineers. Managed workflow via Jira and code via Git.'
  },
  {
    id: 3,
    title: 'RF Analyst Engineer - PT. Jast 1 (Sub Telkomsel Company)',
    subtitle: 'Maret 2014 – Oktober 2016',
    content: 'Led cross-functional drive testing and rigger teams. Analyzed network log files with Nemo Analyzer, monitored 2G/3G/4G KPI metrics, and performed physical RF tuning.'
  }
];

const Experience = () => {
  return (
    <div className="py-4">
      <h3 className="mb-4">Work Experience</h3>
      {experiences.map((item) => (
        <Card key={item.id} className="mb-3 shadow-sm border-0" style={{ background: '#f8f9fa' }}>
          <CardBody>
            <h5 className="font-weight-bold mb-1">{item.title}</h5>
            <p style={subTitle} className="mb-2">{item.subtitle}</p>
            <CardText className="text-secondary">{item.content}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Experience;

const subTitle = {
  color: '#6c757d',
  fontSize: '13px',
  fontStyle: 'italic'
};
