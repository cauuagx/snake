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
        const test2 = [...currentPosition].concat({
          bottom: currentPosition[0].bottom + STEPSIZE,
          left: currentPosition[0].left
        }).reverse()
        if(test2[0].bottom > 560){
          test2[0].bottom = 0
          setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
        }
        else{
          if (currentPosition.length < (currentScore + 10) / 10) {
            setCurrentPosition(currentPosition = test2)
          }
          else {
            setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
          }
        }
      }, TICKRATE)
      break
    case 'a':
      tik = setInterval(() => {
        console.log(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        const test2 = [...currentPosition].concat({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left - STEPSIZE
        }).reverse()

        if (test2[0].left <= 0){
          test2[0].left = 1160
          setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
        }
        else{
          if (currentPosition.length < (currentScore + 10) / 10){
            setCurrentPosition(currentPosition = test2)
          }
          else{
            setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
          }
        }
      }, TICKRATE)
      break
    case 'd':
      tik = setInterval(() => {
        console.log(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        const test2 = [...currentPosition].concat({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left + STEPSIZE
        }).reverse()
        if (test2[0].left > 1160) {
          test2[0].left = 0
          setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 10) / 10) {
            setCurrentPosition(currentPosition = test2)
          } else {
            setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
          }
        }
      }, TICKRATE)
      break
    case 's':
      tik = setInterval(() => {
        console.log(currentPosition)
        checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
        const test2 = [...currentPosition].concat({
          bottom: currentPosition[0].bottom - STEPSIZE,
          left: currentPosition[0].left
        }).reverse()
        if (test2[0].bottom < 0) {
          test2[0].bottom = 560
          setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
        } else {
          if (currentPosition.length < (currentScore + 10) / 10) {
            setCurrentPosition(currentPosition = test2)
          } else {
            setCurrentPosition(currentPosition = test2.filter((element, index) => index !== test2.length - 1))
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