import React from "react";
import "./Experience.css";
import { ExperienceCard } from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      role: "Junior Software Developer Learner",
      period: "DEC 2019 – JULY 2020",
      org: "INTERNATIONAL LABORATORIES CORP., LTD.",
      link: "https://thailand.generation.org/",
      detail: [
        "Learned how to build web applications from React, Node.js, and MongoDB.",
        "Learned how to manage RESTful API, Git version control, and authentication.",
        "Learned design UI components using Figma.",
        "Learned agile methodology.",
      ],
    },

    {
      role: "Manual testing for cake decorating project",
      period: "JUNE 2022 - JULY 2022",
      org: "FREELANCE",
      detail: ["Created manual test cases for RPA cake decorating project."],
    },

    {
      role: "Laboratory manager",
      period: "AUG 2021 - SEP 2022",
      org: "FLORESSENCE (THAILAND)",
      link: "https://www.floressence.fr/en/company",
      detail: [
        "Managed and supplied the laboratory's raw materials.",
        "Compounded fragrance formulation according to instructions.",
        "Trained new and existing employees.",
      ],
    },

    {
      role: "Assistant Research and development manager",
      period: "AUG 2020 – JULY 2021",
      org: "ERB ASIA CO., LTD.",
      link: "https://erbasia.com/",
      detail: [
        "Planned new products and assigned product concepts to the manufacturer.",
        "Researched cosmetic product trends.",
        "Sourced OEM and active ingredients to develop new products at the required quality and budget.",
        "Customized new scent with customer at a workshop session.",
      ],
    },

    {
      role: "Cooperative planning",
      period: " DEC 2019 – JULY 2020",
      org: "INTERNATIONAL LABORATORIES CORP., LTD.",
      link: "http://www.ilc-cosmetic.com/",
      detail: [
        "Coordinated with clients to introduce new products.",
        "Progressive controlled on-hand project.",
        "Handled sale documents and coordinated with other departments.",
      ],
    },
  ];

  let experienceList = [];
  experiences.forEach((experience) => {
    experienceList.push(
      <ExperienceCard experience={experience} key={experience.role} />
    );
  });

  return (
    <div className="experience-container sub">
      <h1 className="title">Experiences</h1>
      <div className="experience-collection">{experienceList}</div>
    </div>
  );
}

export default Experience;
