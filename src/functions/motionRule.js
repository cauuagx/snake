import STEPSIZE from "../constants/stepsize";
import TICKRATE from "../constants/tickrate";
import checkAppleIsCollect from "./checkAppleIsCollect";
import checkShakeIsDie from "./checkShakeIsDie";

let tik;
const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore,setMotionDirection) => {
  clearInterval(tik)

  switch (motionDirection) {
    case 'w':
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
          bottom: currentPosition[0].bottom + STEPSIZE,
          left: currentPosition[0].left,
          transform:'rotate(180deg)'
        })
        if(currentPosition[0].bottom > 560){
          currentPosition[0].bottom = 0
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
        else{
          if (currentPosition.length < (currentScore + 20) / 10) {
            setCurrentPosition(currentPosition)
          }
          else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
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
        if (currentPosition[0].left < 0){
          currentPosition[0].left = 560
          setCurrentPosition(currentPosition = [...currentPosition].filter((element, index) => index !== currentPosition.length - 1))
        }
        else{
          if (currentPosition.length < (currentScore + 20) / 10){
            setCurrentPosition(currentPosition)
          }
          else{
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
        if (currentPosition[0].left > 560) {
          currentPosition[0].left = 0
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
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
        if (currentPosition[0].bottom < 0) {
          currentPosition[0].bottom = 560
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
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