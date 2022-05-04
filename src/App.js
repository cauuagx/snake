import style from './App.module.sass'
import {useEffect, useState} from "react";
import Apple from "./components/apple";
import createApple1 from "./functions/createApple1";
import motionRule from "./functions/motionRule";
import SnakePart from "./components/snakePart";

function App() {
  const [currentPosition, setCurrentPosition] = useState([{
    bottom: 0,
    left: 0
  }])
  const [applesPosition, setApplesPosition] = useState([])
  const [motionDirection, setMotionDirection] = useState()
  const [currentScore, setCurrentScore] = useState(0)

  const setMotionDirectionEffect = (button) => {
    setMotionDirection(button.key)
  }

  useEffect(() => {
    setTimeout(() => {
      createApple1(applesPosition, setApplesPosition)
    }, 2000)
  }, [currentScore])
  useEffect(() => {
    motionRule(motionDirection, applesPosition, setApplesPosition, currentPosition, setCurrentPosition, currentScore, setCurrentScore)
    document.addEventListener('keypress', setMotionDirectionEffect)
  }, [motionDirection])

  return (
    <div className={style.background}>
      <div className={style.playBoard}>
        {
          applesPosition.length > 0 &&
          applesPosition.map((applePosition, index) => {
            return <Apple position={applePosition} key={index} id={applePosition.id}/>
          })
        }
        {
            currentPosition.map((position, index) => <SnakePart
              currentPosition={position}
              key={index}
            />)
        }
      </div>
      <div className={style.score}>
        <p>Score:{currentScore}</p>
      </div>
    </div>
  );
}

export default App;
