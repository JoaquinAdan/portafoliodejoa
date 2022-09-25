import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col>
        <div className="proj-imgbx">
          <div>
            <img src={imgUrl} alt={title} className="app" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <button className="button-project">
                <a
                  href={url}
                  className="text-button-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar
                </a>
              </button>
            </div>
          </div>
        </div>
    </Col>
  );
};
