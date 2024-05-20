import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/lap.png';
import resume from '../assets/pdf/resume.pdf';
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          seScrolled(true);
        } else {
          seScrolled(false);
        }
      }
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="https://github.com/RiteshwarBrar" target="_blank" rel="noreferrer">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Languages</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href={resume} target="_blank" rel="noreferrer" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => 
            {
              onUpdateActiveLink('resume')
            }
            }>Resume</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <a href="https://www.linkedin.com/in/brar-52-ritesh" target="_blank" rel="noreferrer">
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span><span /></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
