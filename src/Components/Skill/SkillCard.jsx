import React from 'react'

export const SkillCard = (props) => {
    let skill = props.skill
    let filename = skill.name.toLowerCase().replace(" ","")
    let file = `src/Components/image/skill/${filename}.png`

  return (
    <div className="skill-card">
                    <img src={file} alt={filename} />
                    <span>{skill.name}</span>
                </div>
  )
}
