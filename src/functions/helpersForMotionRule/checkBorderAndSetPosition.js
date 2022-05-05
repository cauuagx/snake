import checkBorder from "./checkBorder";
import setPosition from "./setPosition";

const checkBorderAndSetPosition = (motionDirection,currentPosition,setCurrentPosition,currentScore) =>{
  !checkBorder(motionDirection,currentPosition,setCurrentPosition)&&
  setPosition(currentPosition,setCurrentPosition,currentScore)
}
export default checkBorderAndSetPosition