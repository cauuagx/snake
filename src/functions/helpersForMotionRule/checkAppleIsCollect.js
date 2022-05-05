const checkAppleIsCollect = (applesPosition, currentPosition, setApplesPosition, currentScore, setCurrentScore) => {
  const foundApple = [...applesPosition].findIndex(apple => apple.left === currentPosition[0].left && apple.bottom === currentPosition[0].bottom)
  if (foundApple !== -1) {
    setCurrentScore(currentScore + 10)
    setApplesPosition([...applesPosition].filter((apple, index) => index !== foundApple))
  }
}
export default checkAppleIsCollect