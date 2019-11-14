import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Experience from './components/Experience';
import Footer from './components/footer';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Navbar color="dark" light expand="md">
            <Container>
            <NavbarBrand style={navTitle} href="/">Handoko</NavbarBrand>
           
            <Collapse  navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={navTitle} href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={navTitle} href="/experience">Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={navTitle} href="/portofolio">Portofolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={navTitle} href="https://github.com/handole?tab=repositories">GitHub</NavLink>
                </NavItem>
                
              </Nav>
            </Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Container>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/experience' component={Experience} />
            <Route path='/portofolio' component={Portofolio} />
          </Container>   
          <Footer />       
        </div>
      </Router>
    )
  }
}

export default App;

const navTitle = {
  color: "white",
  fonsSize: "30px"
}