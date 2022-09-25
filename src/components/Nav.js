import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="container">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#tecnologias"
              className={
                activeLink === "tecnologias"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("tecnologias")}
            >
              Tecnologias
            </Nav.Link>
            <Nav.Link
              href="#proyectos"
              className={
                activeLink === "proyectos"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("proyectos")}
            >
              Proyectos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/joaquin-rodriguez-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="linkedin.svg" alt="github" />
              </a>
              <a
                href="https://github.com/JoaquinAdan"
                target="_blank"
                rel="noreferrer"
              >
                <img src="github.svg" alt="github" />
              </a>
              <a
                href="https://walink.co/d770d8"
                target="_blank"
                rel="noreferrer"
              >
                <img src="whatsapp.svg" alt="github" />
              </a>
            </div>

            <button className=" button-nav">
              <a href="#contactame" className="text-button-nav">
                Contactame
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
