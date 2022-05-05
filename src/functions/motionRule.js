import STEPSIZE from "../constants/stepsize";
import TICKRATE from "../constants/tickrate";
import checkAppleIsCollect from "./helpersForMotionRule/checkAppleIsCollect";
import checkShakeIsDie from "./helpersForMotionRule/checkShakeIsDie";
import checkBorder from "./helpersForMotionRule/checkBorder";
import checkBorderAndSetPosition from "./helpersForMotionRule/checkBorderAndSetPosition";

let tik;
const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore,setMotionDirection) => {
  clearInterval(tik)
  switch (motionDirection) {
    case 'w':
      tik = setInterval(() => {
        checkShakeIsDie(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        console.log(currentPosition.length,'С такими заходит')
        currentPosition.unshift({
          bottom: currentPosition[0].bottom + STEPSIZE,
          left: currentPosition[0].left,
          transform:'rotate(180deg)'
        })
        console.log(currentPosition.length,'C такими приходит')
        if (checkBorder(motionDirection,currentPosition,setCurrentPosition)) {
          console.log(currentPosition.length,'C такими уходит')
        } else {
          // if (currentPosition.length < (currentScore + 20) / 10) {
          //   console.log('penis')
          //   setCurrentPosition(currentPosition)
          // } else {
            console.log('penis',currentPosition.length)
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          // }
        }
      }, TICKRATE)
      break
    case 'a':
      tik = setInterval(() => {
        if (checkShakeIsDie(currentPosition)){
          clearInterval(tik)
          setMotionDirection(motionDirection=undefined)
          setCurrentPosition(currentPosition=[{
            bottom:0,
            left:0,
          }])
        }
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left - STEPSIZE,
          transform:'rotate(90deg)'
        })
        if (checkBorder(motionDirection,currentPosition,setCurrentPosition)) {
        } else {
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
      break
    case 'd':
      tik = setInterval(() => {
        if (checkShakeIsDie(currentPosition)){
          clearInterval(tik)
          setMotionDirection(motionDirection=undefined)
          setCurrentPosition(currentPosition=[{
            bottom:0,
            left:0,
          }])
        }
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left + STEPSIZE,
          transform:'rotate(270deg)'
        })
        if (checkBorder(motionDirection,currentPosition,setCurrentPosition)) {
        } else {
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
      break
    case 's':
      tik = setInterval(() => {
        if (checkShakeIsDie(currentPosition)){
          clearInterval(tik)
          setMotionDirection(motionDirection=undefined)
          setCurrentPosition(currentPosition=[{
            bottom:0,
            left:0
          }])
        }
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom - STEPSIZE,
          left: currentPosition[0].left,
          transform:'rotate(0deg)'
        })
        if (checkBorder(motionDirection,currentPosition,setCurrentPosition)) {
        } else {
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }

      }, TICKRATE)
      break
    default:
      return
  }
}
export default motionRule