import React from "react";
import Education from "../Education";


function createEducationList(education) {
    return <Education
        key={education.id}
        place={education.place}
        course={education.course}
        time={education.time}
    />
}
export default createEducationList;