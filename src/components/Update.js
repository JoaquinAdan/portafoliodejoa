import React from "react";

const Update = () => {
  return (
    <div className="updates-border-open">
      <div className="updates-container-open">
        <span
          className="update-open"
          style={{ fontWeight: "700", fontSize: "2.4rem", color: "#fff" }}
        >
          {" "}
          Próximos updates:{" "}
        </span>
        <span className="update-open"> Actualizaciones en proyectos </span>
        <span className="update-open"> Mejora en responsive </span>
        <span className="update-open"> Más y mejores animaciones </span>
      </div>
    </div>
  );
};

export default Update;
