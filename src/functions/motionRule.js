import STEPSIZE from "../constants/stepsize";
import TICKRATE from "../constants/tickrate";
import checkAppleIsCollect from "./helpersForMotionRule/checkAppleIsCollect";
import checkShakeIsDie from "./helpersForMotionRule/checkShakeIsDie";
import checkBorder from "./helpersForMotionRule/checkBorder";

let tik;
let prevMotionDirecton;
const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore) => {
    if(motionDirection === 'w' && prevMotionDirecton !== 's') {
      clearInterval(tik)
      prevMotionDirecton = motionDirection
      tik = setInterval(() => {
        checkShakeIsDie(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom + STEPSIZE,
          left: currentPosition[0].left,
          transform: 'rotate(180deg)'
        })
        if (checkBorder(motionDirection, currentPosition)) {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
    }
    else if (motionDirection === 'a' && prevMotionDirecton !== 'd') {
      clearInterval(tik)
      prevMotionDirecton = motionDirection
      tik = setInterval(() => {
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
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
    }
    else if (motionDirection === 'd' && prevMotionDirecton !== 'a') {
      clearInterval(tik)
      prevMotionDirecton = motionDirection
      tik = setInterval(() => {
        checkShakeIsDie(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left + STEPSIZE,
          transform: 'rotate(270deg)'
        })
        if (checkBorder(motionDirection, currentPosition)) {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
    }
    else if(motionDirection ==='s'  &&  prevMotionDirecton!=='w') {
      clearInterval(tik)
      prevMotionDirecton = motionDirection
      tik = setInterval(() => {
        checkShakeIsDie(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom - STEPSIZE,
          left: currentPosition[0].left,
          transform: 'rotate(0deg)'
        })
        if (checkBorder(motionDirection, currentPosition)) {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
    }
}
export default motionRule