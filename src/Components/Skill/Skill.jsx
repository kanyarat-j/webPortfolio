import React from "react";
import './Skill.css'
import { SkillCard } from "./SkillCard";

function Skill() {

    const skills = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'MongoDB' },
        { name: 'SQL' },
        { name: 'Express' },
        { name: 'Node JS' }
    ]

    let skillList=[];
    skills.forEach(skill => {
        skillList.push( <SkillCard skill={skill} key={skill.name}/> )
    })
    return(
        <div className="skill-container sub">
            <h1 className="title">Skills</h1>
            <div className="skill-colletion">
             {skillList}
            </div>

        </div>
    )
}

export default Skill