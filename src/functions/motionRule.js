import TICKRATE from "../constants/tickrate";
import motionDirectionRule from "./helpersForMotionRule/motionDirectionRule";

const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore,motionRuleInit,setMotionRuleInit,timerRef,prevMotionDirection) => {
    setTimeout(()=>{
      setMotionRuleInit(motionRuleInit+=1)
    },TICKRATE)
    if(motionDirection === 'w' && prevMotionDirection.current !== 's') {
      motionDirectionRule(prevMotionDirection,motionDirection,currentPosition,setCurrentPosition,applesPosition,setApplesPosition,
        currentScore,setCurrentScore)
    }
    else if (motionDirection === 'a' && prevMotionDirection.current !== 'd') {
      motionDirectionRule(prevMotionDirection,motionDirection,currentPosition,setCurrentPosition,applesPosition,setApplesPosition,
        currentScore,setCurrentScore)
    }
    else if (motionDirection === 'd' && prevMotionDirection.current !== 'a') {
      motionDirectionRule(prevMotionDirection,motionDirection,currentPosition,setCurrentPosition,applesPosition,setApplesPosition,
        currentScore,setCurrentScore)
    }
    else if (motionDirection === 's' && prevMotionDirection.current !=='w') {
      motionDirectionRule(prevMotionDirection,motionDirection,currentPosition,setCurrentPosition,applesPosition,setApplesPosition,
        currentScore,setCurrentScore)
    }
    // timerRef.current = setInterval(() => {
    //
    // },TICKRATE)
}
export default motionRule