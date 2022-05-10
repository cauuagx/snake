import TICKRATE from "../constants/tickrate";
import allMotionDirection from "./helpersForMotionRule/allMotionDirection";

const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore,motionRuleInit,setMotionRuleInit,timerRef,prevMotionDirection) => {
    setTimeout(()=>{
      setMotionRuleInit(motionRuleInit+=1)
    },TICKRATE)
  allMotionDirection(motionDirection, applesPosition, setApplesPosition,
    currentPosition, setCurrentPosition, currentScore, setCurrentScore,motionRuleInit,timerRef,prevMotionDirection)
  // timerRef.current = setInterval(() => {
    //
    // },TICKRATE)
}
export default motionRule