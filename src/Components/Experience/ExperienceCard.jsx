import React from "react";

export const ExperienceCard = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);

  let experience = props.experience;
  let details = props.experience.detail;

  let detailList = [];

  details.forEach((item) => {
    detailList.push(<li key={item.id}>{item}</li>);
  });
  function handleClick(e) {
    e.preventDefault();
    setShowResults(true);
    console.log("showResults", showResults);
  }

  return (
    <div className="experience-card" >
      {/* } <img src="#" alt="company-logo" />  */}
      <span className="experience-role">{experience.role}</span>
      <p className="experience-period">{experience.period}</p>
      <a href={experience.link} target="_blank" className="experience-link">
        {experience.org}
      </a>
      <i class="gg-details-more" onClick={onClick}></i>
      {showResults ? <ul className="detail">{detailList}</ul> : null}
    </div>
  );
};
