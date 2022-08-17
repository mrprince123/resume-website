import React from "react";


function Experience(props) {
    return (
        <div className="resume-center">
        <div className="experience-section">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.url}>Check App/Website</a>
        </div>
        </div>
    );
}

export default Experience;