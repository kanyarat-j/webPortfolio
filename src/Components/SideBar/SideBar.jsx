import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <div className="profile-img-container">
          <img
            className="profile-img"
            src="src\Components\image\IMG_0631.jpg"
          />
        </div>
        <Link className="sidebar-item" to="/">
          About
        </Link>
        <Link className="sidebar-item" to="/experience">
          Experiences
        </Link>
        <Link className="sidebar-item" to="/skill">
          Skills
        </Link>
        <Link className="sidebar-item" to="/project">
          Projects
        </Link>
      </div>

      <div className="sidebar-link">
        <a href="https://github.com/kanyarat-j" target="_blank">
          <img src="src\Components\image\github.png" alt="github-link" />
        </a>
        <a href="https://www.linkedin.com/in/kanyarat-j/" target="_blank">
          <img src="src\Components\image\linkedin.png" alt="linkedin-link" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
