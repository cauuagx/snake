import React from 'react'
import Apple from "../apple";

const Apples = ({applesPosition}) =>{
  return(
    <React.Fragment>
      {
        applesPosition.length > 0 &&
        applesPosition.map((applePosition, index) => {
          return <Apple position={applePosition} key={index} id={applePosition.id}/>
        })
      }
    </React.Fragment>
  )
}

export default Apples