

const checkBorder = (motionDirection,currentPosition) =>{
  if(currentPosition[0].left < 0||
    currentPosition[0].left > 560 ||
    currentPosition[0].bottom < 0 ||
    currentPosition[0].bottom > 560
  ){
    switch (motionDirection){
      case 'w':
        currentPosition[0].bottom = 0
        break
      case 'a':
        currentPosition[0].left = 560
        break
      case 's':
        currentPosition[0].bottom = 560
        break
      case 'd':
        currentPosition[0].left = 0
        break
      default:
        break
    }
    return true
  }
  return false
}

export default checkBorder