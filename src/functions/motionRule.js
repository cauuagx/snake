import STEPSIZE from "../constants/stepsize";
import TICKRATE from "../constants/tickrate";
import checkAppleIsCollect from "./helpersForMotionRule/checkAppleIsCollect";
import checkShakeIsDie from "./helpersForMotionRule/checkShakeIsDie";
import checkBorder from "./helpersForMotionRule/checkBorder";
let prevMotionDirection;
const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore,motionRuleInit,setMotionRuleInit) => {
    setTimeout(()=>{
      setMotionRuleInit(motionRuleInit+=1)
    },TICKRATE)
    if(motionDirection === 'w' && prevMotionDirection !== 's') {
      prevMotionDirection = motionDirection
      checkShakeIsDie(currentPosition)
      checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
      currentPosition.unshift({
        bottom: currentPosition[0].bottom + STEPSIZE,
        left: currentPosition[0].left,
        transform: 'rotate(180deg)'
      })
      if (checkBorder(motionDirection, currentPosition)) {
        setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
      } else {
        if (currentPosition.length < (currentScore + 20) / 10) {
          setCurrentPosition(currentPosition)
        } else {
          setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }
    }
    else if (motionDirection === 'a' && prevMotionDirection !== 'd') {
      prevMotionDirection = motionDirection
      checkShakeIsDie(currentPosition)
      checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
      currentPosition.unshift({
        bottom: currentPosition[0].bottom,
        left: currentPosition[0].left - STEPSIZE,
        transform: 'rotate(90deg)'
      })
      if (checkBorder(motionDirection, currentPosition)) {
        setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
      } else {
        if (currentPosition.length < (currentScore + 20) / 10) {
          setCurrentPosition(currentPosition)
        } else {
          setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }
    }
    else if (motionDirection === 'd' && prevMotionDirection !== 'a') {
      prevMotionDirection = motionDirection
      checkShakeIsDie(currentPosition)
      checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
      currentPosition.unshift({
        bottom: currentPosition[0].bottom,
        left: currentPosition[0].left + STEPSIZE,
        transform: 'rotate(270deg)'
      })
      if (checkBorder(motionDirection, currentPosition)) {
        setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
      } else {
        if (currentPosition.length < (currentScore + 20) / 10) {
          setCurrentPosition(currentPosition)
        } else {
          setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
        }
    }
    else if(motionDirection ==='s'  &&  prevMotionDirection!=='w') {
      prevMotionDirection = motionDirection
      checkShakeIsDie(currentPosition)
      checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
      currentPosition.unshift({
        bottom: currentPosition[0].bottom - STEPSIZE,
        left: currentPosition[0].left,
        transform: 'rotate(0deg)'
      })
      if (checkBorder(motionDirection, currentPosition)) {
        setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
      } else {
        if (currentPosition.length < (currentScore + 20) / 10) {
          setCurrentPosition(currentPosition)
        } else {
          setCurrentPosition(currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }
    }
}
export default motionRule