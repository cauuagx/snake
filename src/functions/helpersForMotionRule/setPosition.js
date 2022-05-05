


const setPosition = (currentPosition,setCurrentPosition,currentScore) =>{
    if (currentPosition.length < (currentScore + 20) / 10) {
      setCurrentPosition(currentPosition)
    }
    else {
      setCurrentPosition(currentPosition = currentPosition.filter((element, index) => index !== currentPosition.length - 1))
    }
}

export default setPosition
