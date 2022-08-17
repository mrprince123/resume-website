
import React from "react"
import Experience from "../Experience"

function createExperienceList(experience) {
    return <Experience
        key={experience.id}
        name={experience.name}
        description={experience.description}
        url={experience.url}
    />
}

export default createExperienceList;