import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-4">
      <Jumbotron className="bg-light p-5 rounded shadow-sm">
        <h1 className="display-4 font-weight-bold">Hello, world!</h1>
        <p className="lead mt-3 text-secondary">
          I am <strong>Denih Handoko</strong>, a Software Engineer specialized in backend development and scalable web architectures.
        </p>
        <hr className="my-4" />
        <p className="text-muted">
          Proficient in Python (FastAPI, Django), Golang (Gin), ETL data pipelines, and RESTful APIs.
          Focused on writing clean, maintainable code and solving real-world software problems.
        </p>
        <div className="mt-4">
          <Button tag={Link} to="/portofolio" color="dark" className="mr-2">
            View Projects
          </Button>
          <Button tag={Link} to="/about" outline color="dark">
            About Me
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
