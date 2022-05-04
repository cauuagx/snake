import style from './snakePart.module.sass'

const SnakePart = ({currentPosition,index,currentPositionLength}) =>{
  return(
    <div
      style={{
        bottom:currentPosition.bottom+'px',
        left:currentPosition.left+'px',
        background: 'transparent',
        transform: currentPosition.transform,
        zIndex:5
      }}
      className={style.snakePart}
    >
      {

        index ===0
        ?
        <img src="snakeHead.png" className={style.snakeHead} alt=""/>
        :index === currentPositionLength-1
          ?
          <img src="snakeTail.png" className={style.snakeHead} alt=""/>
          :
          <img src="snakeBody.png" className={style.snakeHead} alt=""/>
      }
    </div>

  )
}

export default SnakePart