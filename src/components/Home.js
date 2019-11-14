import React, { Component } from 'react';
// import { Row } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <h1>Hello, world!</h1>
        <br/>
        <p style={conText}>I am Denih Handoko, a software engineer </p>
        <p style={conText}>Loves technology. Ideal professional to augment a technical team for back end development. Python is efficient & extremely powerful.</p>
        <p style={conText}>I has a preference for back end programming. Finds joy in helping his colleague engineers and can act as point of contact for 2,3 developers. </p>
        <p style={conText}>My ambition is to constantly grow his technical skills and now is programming 2 mobile apps using React Native.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Home;

const conText = {
  color: "grey",
  fontSize: "15px"
}