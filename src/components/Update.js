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
          Proximos updates:{" "}
        </span>
        <span className="update-open"> Actualizaciónes en proyectos </span>
        <span className="update-open"> mejora en responsive </span>
        <span className="update-open"> más y mejores animaciones </span>
      </div>
    </div>
  );
};

export default Update;
