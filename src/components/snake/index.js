import SnakePart from "../snakePart";
import React from 'react'


const Snake = ({currentPosition}) =>{
  return(
    <React.Fragment>
      {
        currentPosition.map((position, index) => <SnakePart
          currentPosition={position}
          index={index}
          currentPositionLength={currentPosition.length}
          key={index}
        />)
      }
    </React.Fragment>
  )
}
export default Snake