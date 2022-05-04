import STEPSIZE from "../constants/stepsize";
import TICKRATE from "../constants/tickrate";
import checkAppleIsCollect from "./checkAppleIsCollect";

let tik;
const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore) => {
  clearInterval(tik)

  switch (motionDirection) {
    case 'w':
      tik = setInterval(() => {
        console.log(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom + STEPSIZE,
          left: currentPosition[0].left
        })
        if(currentPosition[0].bottom > 560){
          currentPosition[0].bottom = 0
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
        else{
          if (currentPosition.length < (currentScore + 10) / 10) {
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
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left - STEPSIZE
        })
        console.log(currentPosition)

        if (currentPosition[0].left < 0){
          currentPosition[0].left = 1160
          setCurrentPosition(currentPosition = [...currentPosition].filter((element, index) => index !== currentPosition.length - 1))
        }
        else{
          if (currentPosition.length < (currentScore + 10) / 10){
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
        console.log(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left + STEPSIZE
        })
        if (currentPosition[0].left > 1160) {
          currentPosition[0].left = 0
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 10) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }
      }, TICKRATE)
      break
    case 's':
      tik = setInterval(() => {
        console.log(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        currentPosition.unshift({
          bottom: currentPosition[0].bottom - STEPSIZE,
          left: currentPosition[0].left
        })
        if (currentPosition[0].bottom < 0) {
          currentPosition[0].bottom = 560
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 10) / 10) {
            setCurrentPosition(currentPosition)
          } else {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          }
        }

      }, TICKRATE)
      break
    default:
      console.log(currentPosition)
      console.log('xyi')

      return
  }
}
export default motionRule