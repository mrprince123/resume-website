import React from "react";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Interest from "./Interest";
import Skills from "./Skills";
import educationList from "../educationList";
import ExperienceList from "../ExperienceList";
import InterestList from "../InterestList";
import skillList from "../skillList";
import Resume from "./Resume";
import createEducationList from "./createComponents/createEducationList";
import createExperienceList from "./createComponents/createExperienceList";
import createInterestList from "./createComponents/createInterestList";
import createSkillList from "./createComponents/createSkillList";


function any() {
    return (
        <div>
            <createEducationList />
            <createExperienceList />
            <createInterestList />
            <createSkillList />
        </div>
    );
}

function App() {
    return (
        <div>
            <Resume />
            <Bio />
            <h1>Education</h1>
            {educationList.map(createEducationList)}
            <h1>Experience</h1>
            {ExperienceList.map(createExperienceList)}
            <h1>Interest</h1>
            {InterestList.map(createInterestList)}
            <h1>Skills</h1>
            {skillList.map(createSkillList)}
        </div>
    );
}

export default App;