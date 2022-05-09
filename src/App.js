import style from './App.module.sass'
import {useEffect, useRef, useState} from "react";
import createApple1 from "./functions/createApple1";
import motionRule from "./functions/motionRule";
import Snake from "./components/snake";
import Apples from "./components/apples";
import BackgroundOfPlayground from "./components/backgroundOfPlayground";
function App() {
  const [currentPosition, setCurrentPosition] = useState([{
    bottom: 280,
    left: 360,
    transform: 'rotate(270deg)',
  },{
    bottom: 280,
    left: 320,
    transform: 'rotate(270deg)',
  },{
    bottom: 280,
    left: 280,
    transform: 'rotate(270deg)',
  }
  ])
  const [applesPosition, setApplesPosition] = useState([])
  const [motionRuleInit,setMotionRuleInit] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const motionDirection = useRef('d')
  const setMotionDirectionEffect = ({key}) => {
    motionDirection.current = key
    console.log(motionDirection,'Такой сейчас ключ')
  }

  useEffect(() => {
    setTimeout(() => {
      createApple1(applesPosition, setApplesPosition)
    }, 2000)
  }, [currentScore])
  useEffect(() => {
    motionRule(motionDirection.current, applesPosition, setApplesPosition, currentPosition,
      setCurrentPosition, currentScore, setCurrentScore,motionRuleInit,setMotionRuleInit)
  }, [motionRuleInit])
  useEffect(()=>{
    document.addEventListener('keypress', setMotionDirectionEffect)
    },[])
  return (
    <div className={style.background}>
      <div className={style.playBoard}>
        <Apples applesPosition={applesPosition}/>
        <Snake currentPosition={currentPosition}/>
        <BackgroundOfPlayground/>
      </div>
      <div className={style.score}>
        <p>Score:{currentScore}</p>
      </div>
    </div>
  );
}

export default App;
