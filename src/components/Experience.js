import React, { Component } from 'react';
import {
  Card, CardText, CardBody
} from 'reactstrap';

class Experiance extends Component {
  state = {
    experience: [
      {
        'id': 1,
        'title': 'Full Stack Software Engineer Sosaro',
        'subtitle': 'Juni – October 2019',
        'content': 'Full stack Python developer. Develop Restfull API for mobile app'
      },
      {
        'id': 2,
        'title': 'Full Stack Software Engineer CoderDojo Indonesia',
        'subtitle': 'April 2018 – Mei 2019',
        'content': 'Software engineer using the Python/Django framework. Delivering a broker website (apartments) for the USA market, in a team with 3 colleague engineers. Task management via Jira. Versioning control with Bitbucket.'
      },
      {
        'id': 3,
        'title': 'RF Analyst Engineer, PT. Jast 1 (Sub Telkomsel Company)',
        'subtitle': 'Maret 2014 - Oktober 2016',
        'content': 'Coordinating a Driver tester Team of 4 people & the Rigger Team of 2 people. Executing audits and physical tuning. Log file analysis with ‘Nemo Analyzer’. Testing 2G, 3G, 4G network coverage (signal strength, internet, voice quality) based on cluster area. Target and performance measuring based on KPI’s.'
      }
    ]
  }

  render() {
    return (
      <div>
        <h4>My experience</h4>
        {
          this.state.experience.map((item, index) => (
            <Card>
              <CardBody key={item.id}>
                <h5>{item.title}</h5>
                <p style={subTitle}>{item.subtitle}</p>
                <CardText>{item.content}</CardText>
                
              </CardBody>
            </Card>
          ))
        }
      </div>
    )
  }
}

export default Experiance;

const subTitle = {
  color: "grey",
  fontSize: "12px",
  fontStyle: "Italic"
}