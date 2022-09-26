import React from "react";
import { Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import task from "../assets/task.png";
import pokedex from "../assets/pokedex.png";
import buscadorImagen from "../assets/buscadorImagenes.png";

const Project = () => {
  const projects = [
    {
      title: "Pokedex",
      description: "Utilizando la API de PokeAPI",
      imgUrl: pokedex,
      url: "https://pokedexfavoritos-ndnw6412j-joaquinadan.vercel.app/",
    },
    {
      title: "Buscador de imágenes",
      description: "Utilizando la API de unsplash",
      imgUrl: buscadorImagen,
      url: "https://buscador-imagenes-one.vercel.app/",
    },
    {
      title: "Task App",
      description: "Guardado de tarea o listas",
      imgUrl: task,
      url: "https://joaquinadan.github.io/taskappboceto/",
    },
  ];

  return (
    <div
      className="project"
      style={{ textAlign: "center", fontSize: "1.5rem" }}
      id="proyectos"
    >
      <div className="container-margin">
        <div className="project-text-container">
          <h1 className="project-title">Proyectos</h1>
          <h3 className="project-text">
            Estos son algunos de los proyectos que he realizado con react,
            tecnología a la cual le estoy dedicando esfuerzo para poder
            desarrollar cada vez proyectos más interesantes, complejos y
            atractivos.
          </h3>
        </div>
        <Row>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Project;
