import React from "react";

function Interest(props) {
    return (
        <div className="resume-center">
            <div className="interest-section">
                <h2>{props.name}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Interest;