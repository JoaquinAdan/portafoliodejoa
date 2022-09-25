import Gear from "./Gear";

const Footer = () => {
  return (
    <div
      className="footer container-margin"
    >
        <Gear/>
      <div className="left-footer-container">
        <span className="navbar-text navbar-footer">
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
            <a href="https://walink.co/d770d8" target="_blank" rel="noreferrer">
              <img src="whatsapp.svg" alt="github" />
            </a>
          </div>
        </span>
        <p className="text-footer">
          Copyright 2022. Todos los derechos reservados
        </p>
      </div>
      <div className="logo-footer">
        <img
          src="logo.svg"
          alt="logo footer"
          style={{
            height: "75px",
          }}
          className="width-logo"
        />
      </div>
    </div>
  );
};

export default Footer;
