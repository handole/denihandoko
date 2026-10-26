import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Experience from './components/Experience';
import Footer from './components/footer';
import logo from './logo.svg';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar color="dark" dark expand="md" className="py-3 sticky-top">
          <Container>
            <NavbarBrand tag={Link} to="/" className="d-flex align-items-center" style={navTitle} onClick={closeSidebar}>
              <img
                src={logo}
                alt="DH Logo"
                width="34"
                height="34"
                className="mr-2 rounded"
                style={{ verticalAlign: 'middle', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
              />
              <span>Handoko</span>
            </NavbarBrand>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="burger-btn d-md-none"
              onClick={toggleSidebar}
              aria-label="Toggle navigation menu"
              aria-expanded={sidebarOpen}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>

            {/* Desktop Navbar Menu */}
            <div className="d-none d-md-block">
              <Nav className="ml-auto align-items-center" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about" style={navItemStyle}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/experience" style={navItemStyle}>
                    Experience
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/portofolio" style={navItemStyle}>
                    Portofolio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.linkedin.com/in/denih-handoko-79584656"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={navItemStyle}
                  >
                    LinkedIn
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
                <NavItem className="ml-2">
                  <a
                    href="/CV_Denih_Handoko.pdf"
                    download="CV_Denih_Handoko.pdf"
                    className="btn btn-outline-light btn-sm px-3 font-weight-bold"
                    style={{ borderRadius: '20px' }}
                  >
                    Download CV
                  </a>
                </NavItem>
              </Nav>
            </div>
          </Container>
        </Navbar>

        {/* Mobile Sidebar Overlay */}
        <div
          className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
          onClick={closeSidebar}
          aria-hidden="true"
        />

        {/* Mobile Slide-in Sidebar Drawer */}
        <aside
          className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}
          aria-label="Mobile Navigation"
        >
          <div className="sidebar-header">
            <div className="d-flex align-items-center">
              <img
                src={logo}
                alt="DH Logo"
                width="28"
                height="28"
                className="mr-2 rounded"
              />
              <span className="text-white font-weight-bold" style={{ fontSize: '18px' }}>
                Menu
              </span>
            </div>
            <button
              type="button"
              className="close-btn"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <div className="sidebar-nav">
            <Link to="/" className="sidebar-nav-link" onClick={closeSidebar}>
              Home
            </Link>
            <Link to="/about" className="sidebar-nav-link" onClick={closeSidebar}>
              About
            </Link>
            <Link to="/experience" className="sidebar-nav-link" onClick={closeSidebar}>
              Experience
            </Link>
            <Link to="/portofolio" className="sidebar-nav-link" onClick={closeSidebar}>
              Portofolio
            </Link>
            <a
              href="https://www.linkedin.com/in/denih-handoko-79584656"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-nav-link"
              onClick={closeSidebar}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/handole?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-nav-link"
              onClick={closeSidebar}
            >
              GitHub ↗
            </a>
            <div className="px-3 pt-3">
              <a
                href="/CV_Denih_Handoko.pdf"
                download="CV_Denih_Handoko.pdf"
                className="btn btn-outline-light btn-block font-weight-bold"
                onClick={closeSidebar}
              >
                Download CV (PDF)
              </a>
            </div>
          </div>

          <div className="sidebar-footer">
            <small className="text-muted d-block">
              Denih Handoko &bull; Portfolio
            </small>
          </div>
        </aside>

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
