const checkShakeIsDie = (currentPosition) => {
  if (currentPosition.findIndex((position, index) =>
    position.bottom === currentPosition[0].bottom
    &&
    position.left === currentPosition[0].left
    &&
    index !== 0
  ) !== -1) {
    alert('Snake die :(')
    return true
  }
}

export default checkShakeIsDie