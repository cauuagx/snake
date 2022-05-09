import checkShakeIsDie from "./checkShakeIsDie";
import checkAppleIsCollect from "./checkAppleIsCollect";
import pushCurrentPosition from "./pushCurrentPosition";


const motionDirectionRule = (prevMotionDirection,motionDirection,currentPosition,setCurrentPosition,applesPosition,setApplesPosition,
                             currentScore,setCurrentScore
) =>{
  prevMotionDirection.current = motionDirection
  checkShakeIsDie(currentPosition)
  checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
  pushCurrentPosition(motionDirection,currentPosition,setCurrentPosition,currentScore)
}
export default motionDirectionRule