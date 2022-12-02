import React from "react";

export const ProjectCard = (props) => {
    let project = props.project
  return (
    <div className="project-card">
      <img src={project.img} alt="img" />
      <div className="card-detail">
        <span className="project-name">{project.name}</span>
        <p className="project-detail">{project.detail}</p>
        <a href={project.link} target="_blank">
            <img className="github-link" src="./image/github.png" />
        </a>
      </div>
    </div>
  );
};
