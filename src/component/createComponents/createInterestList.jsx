import React from "react";
import Interest from "../Interest";


function createInterestList(interest) {
    return <Interest
        key={interest.id}
        name={interest.name}
        content={interest.content}
    />
}

export default createInterestList;