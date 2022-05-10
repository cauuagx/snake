import motionDirectionRule from "./motionDirectionRule";


const allMotionDirection = (motionDirection, applesPosition, setApplesPosition,
                            currentPosition, setCurrentPosition, currentScore, setCurrentScore,motionRuleInit,timerRef,prevMotionDirection) =>{

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
}
export default allMotionDirection