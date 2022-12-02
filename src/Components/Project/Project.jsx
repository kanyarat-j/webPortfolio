import React from "react";
import "./Project.css";
import { ProjectCard } from "./ProjectCard";

function Project() {
  const projects = [
    {
      id: 1,
      name: "Colmar Academy",
      detail: "Build a Website with HTML, CSS, and Github Pages.",
      img: "./image/colmar.PNG",
      link: "https://github.com/kanyarat-j/Colmar-Academy",
    },
    {
      id: 2,
      name: "Jammming",
      detail: "Create a Playlist App With the Spotify API",
      img: "./image/jammming.PNG",
      link: "https://github.com/kanyarat-j/at-jammming",
    },
    {
      id: 3,
      name: "Final Project",
      detail: "...",
      img: "./image/jammming.PNG",
      link: "https://github.com/Fiw0202/ExercireTrack",
    },
  ];

  let itemList = [];
  projects.forEach((project) => {
    itemList.push(<ProjectCard project={project} key={project.id} />);
  });

  return (
    <div className="project-container">
      <h1 className="title">Projects</h1>
      <div className="project-collection sub">{itemList}</div>
    </div>
  );
}

export default Project;
