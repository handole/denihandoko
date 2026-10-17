import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Experience from './components/Experience';
import Footer from './components/footer';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar color="dark" dark expand="md" className="py-3">
          <Container>
            <NavbarBrand tag={Link} to="/" style={navTitle}>
              Handoko
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about" style={navItemStyle} onClick={() => setIsOpen(false)}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/experience" style={navItemStyle} onClick={() => setIsOpen(false)}>
                    Experience
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/portofolio" style={navItemStyle} onClick={() => setIsOpen(false)}>
                    Portofolio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/handole?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={navItemStyle}
                  >
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <main className="flex-fill">
          <Container className="py-4">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/experience" component={Experience} />
              <Route path="/portofolio" component={Portofolio} />
            </Switch>
          </Container>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

const navTitle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold'
};

const navItemStyle = {
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: '16px'
};
