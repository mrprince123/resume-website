import React from "react";
import Skills from "../Skills";

function createSkillList(skill) {
    return <Skills
        key={skill.id}
        name={skill.name}
        content={skill.content}
    />
}


export default createSkillList;