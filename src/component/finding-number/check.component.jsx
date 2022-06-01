import React from "react";



export const Button = ({placeholder}, handleChange) => (
    <button
     onClick={ console.log(handleChange)}
     onChange= {handleChange}
    >Click here</button>

)