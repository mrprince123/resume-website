import React from "react";


function Education(props) {
    return (
        <div className="resume-center">
            <div className="education-section">
                <p>{props.id}</p>
                <h2>{props.place}</h2>
                <p>{props.course}</p>
                <p>{props.time}</p>
            </div>
        </div>
    );
}

export default Education;