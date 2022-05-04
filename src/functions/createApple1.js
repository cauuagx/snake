import {v4 as uuidv4} from 'uuid';

const createApple = (applesPosition, setApplesPosition) => {
  if (applesPosition.length < 5) {
    console.log('Apple create')
    const randomPositionOfApple = () => {
      function randomXYPosition() {
        while (true) {
          const randomNumber = Math.round(Math.random() * 561)
          if (randomNumber % 40 === 0) {
            return randomNumber
          }
        }
      }
      return {
        bottom: randomXYPosition(),
        left: randomXYPosition()
      }
    }
    setApplesPosition(applesPosition.concat({...randomPositionOfApple(), id: uuidv4()}))
  }
}

export default createApple

