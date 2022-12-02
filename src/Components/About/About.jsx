import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container sub">
      <div className="about-one">
        <div>
        <div className="about-one-text">
        <h1>
          Hi. I'm Pam.
          <br /> A Software
          <br /> Development <br />
          learner.
        </h1>
        </div>
          <a href="src\Components\image\CV_kanyaratJ.pdf" target="_blank" className="button-resume">Resume</a>
        </div>

      
        <img src="src\Components\image\virus.gif" alt="gif-one" />
        
      </div>

      <div className="about-two">
        <img src="src\Components\image\ab-testing.gif" alt="gif-two" />
        <div className="about-two-text">
          <h1>Kanyarat Jiramahawittayakul</h1>
          <span>
            I am a fast learner and an open-minded, enthusiastic person with
            positive thinking. Experienced with all stages of cosmetic product
            development projects. Ready for challenges in software testing
            career to expand skills and fulfill company goals.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
