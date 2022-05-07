import STEPSIZE from "../constants/stepsize";
import TICKRATE from "../constants/tickrate";
import PARSETIMES from "../constants/parsetimes";
import checkAppleIsCollect from "./helpersForMotionRule/checkAppleIsCollect";
import checkShakeIsDie from "./helpersForMotionRule/checkShakeIsDie";
import checkBorder from "./helpersForMotionRule/checkBorder";

let prevMotionDirection;
const motionRule = (motionDirection, applesPosition, setApplesPosition,
                    currentPosition, setCurrentPosition, currentScore, setCurrentScore, motionRuleInit, setMotionRuleInit) => {
  console.log(motionDirection)
  setTimeout(() => {
    setMotionRuleInit(motionRuleInit += 1)
  }, TICKRATE)
  if (motionDirection === 'w' && prevMotionDirection !== 's') {
    prevMotionDirection = motionDirection
    for (let i = 1; i <= PARSETIMES; i++) {
      setTimeout(() => {
        currentPosition.unshift({
          bottom: currentPosition[0].bottom + STEPSIZE / PARSETIMES,
          left: currentPosition[0].left,
          transform: 'rotate(180deg)'
        })
        if (i === PARSETIMES) {
          checkShakeIsDie(currentPosition)
          checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
          if (checkBorder(motionDirection, currentPosition)) {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          } else {
            if (currentPosition.length < (currentScore + 20) / 10) {
              setCurrentPosition(currentPosition)
            } else {
              setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
            }
          }
        }else {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }, TICKRATE / PARSETIMES * i)
    }
  } else if (motionDirection === 'a' && prevMotionDirection !== 'd') {
    prevMotionDirection = motionDirection
    for (let i = 1; i <= PARSETIMES; i++) {
      setTimeout(() => {
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left - STEPSIZE / PARSETIMES,
          transform: 'rotate(90deg)'
        })
        if (i === PARSETIMES) {
          checkShakeIsDie(currentPosition)
          checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
          if (checkBorder(motionDirection, currentPosition)) {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          } else {
            if (currentPosition.length < (currentScore + 20) / 10) {
              setCurrentPosition(currentPosition)
            } else {
              setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
            }
          }
        }else {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }, TICKRATE / PARSETIMES * i)
    }
  } else if (motionDirection === 'd' && prevMotionDirection !== 'a') {
    prevMotionDirection = motionDirection
    for (let i = 1; i <= PARSETIMES; i++) {
      setTimeout(() => {
        currentPosition.unshift({
          bottom: currentPosition[0].bottom,
          left: currentPosition[0].left + STEPSIZE / PARSETIMES,
          transform: 'rotate(270deg)'
        })
        if (i === PARSETIMES) {
          checkShakeIsDie(currentPosition)
          checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
          if (checkBorder(motionDirection, currentPosition)) {
            setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
          } else {
            if (currentPosition.length < (currentScore + 20) / 10) {
              setCurrentPosition(currentPosition)
            } else {
              setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
            }
          }
        }else {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }, TICKRATE / PARSETIMES * i)
    }
  } else if (motionDirection === 's' && prevMotionDirection !== 'w') {
    prevMotionDirection = motionDirection
    for (let i = 1; i <= PARSETIMES; i++) {
      setTimeout(() => {
        currentPosition.unshift({
          bottom: currentPosition[0].bottom - STEPSIZE / PARSETIMES,
          left: currentPosition[0].left,
          transform: 'rotate(0deg)'
        })
        if (i === PARSETIMES) {
            checkShakeIsDie(currentPosition)
            checkAppleIsCollect(applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore)
            if (checkBorder(motionDirection, currentPosition)) {
              setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
            } else {
              if (currentPosition.length < (currentScore + 20) / 10) {
                setCurrentPosition(currentPosition)
              } else {
                setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
              }
            }
        }else {
          setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
        }
      }, TICKRATE / PARSETIMES * i)
    }
  }
}
export default motionRule