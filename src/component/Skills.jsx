import React from "react";


function Skills(props) {
    return (
        <div className="resume-center">
            <div className="skills-section">
                <h2>{props.name}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Skills;