import STEPSIZE from "../../constants/stepsize";
import checkBorderAndSetPosition from "./checkBorderAndSetPosition";


const pushCurrentPosition = (motionDirection,currentPosition,setCurrentPosition,currentScore) =>{
  switch (motionDirection){
    case 'w':
      currentPosition.unshift({
        bottom: currentPosition[0].bottom + STEPSIZE,
        left: currentPosition[0].left,
        transform: 'rotate(180deg)'
      })
      break
    case 'a':
      currentPosition.unshift({
        bottom: currentPosition[0].bottom ,
        left: currentPosition[0].left - STEPSIZE,
        transform: 'rotate(90deg)'
      })
      break
    case 'd':
      currentPosition.unshift({
        bottom: currentPosition[0].bottom ,
        left: currentPosition[0].left + STEPSIZE,
        transform: 'rotate(270deg)'
      })
      break
    case 's':
      currentPosition.unshift({
        bottom: currentPosition[0].bottom - STEPSIZE,
        left: currentPosition[0].left,
        transform: 'rotate(0deg)'
      })
      break
    default:
      return
  }
  checkBorderAndSetPosition(motionDirection, currentPosition,setCurrentPosition,currentScore)
}
export default pushCurrentPosition