import React from "react";

const Tecnologies = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="cv-container">
        <div className="cv-2" />
        <div className="cv-3" />
        <div className="cv-1">
          <div>
            <p className="text-cv">
              Puedes descargar mi curriculum vitae desde este botón para saber
              un poco mas sobre mi.
            </p>
          </div>
          <div className="cv-div">
            <div className="arrows" />
          </div>
          <div className="cv-div">
            <button className="button-cv">
              <a
                href="/downloads/joaquin-rodriguez-cv.pdf"
                download
                className="cv-boton"
              >
                Descargar CV
              </a>
            </button>
          </div>
        </div>
      </div>
      <h1 className="title-tecnologies" id="tecnologias">
        Tecnologías que uso:
      </h1>
      <div className="tecnologies-container">
        <div className="tecnologie-container">
          <img
            src="tecnologias/js.svg"
            alt="javascript icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/react.svg"
            alt="react icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/css.svg"
            alt="css icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/html.svg"
            alt="html icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/sass.svg"
            alt="sass icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/bootstrap.svg"
            alt="bootstrap icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/tailwind.svg"
            alt="tailwind icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container">
          <img
            src="tecnologias/git.svg"
            alt="git icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <div className="tecnologie-container figma">
          <img
            src="tecnologias/figma.svg"
            alt="figma icono"
            className="tecnologie"
          />
          <div className="shadow-tecnologies" />
        </div>
        <img
          src="brilloDorado.png"
          alt="brillo"
          className="brillo-verde-oscuro"
        />
        <img
          src="brilloPlateado.png"
          alt="brillo"
          className="brillo-verde-claro"
        />
      </div>
    </div>
  );
};

export default Tecnologies;
