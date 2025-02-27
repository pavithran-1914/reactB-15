import React from "react";

function ListExamp()
{
    const courses=[{id:1,name:'html courses'}, {id:2,name:'css courses'},{id:3,name:'Javascript courses'}]
    return(
        <div>
            <ul>{courses.map(data=>(<li>{data.name}</li>))}</ul>
        </div>
    )
}
export default ListExamp;