import style from './snakePart.module.sass'

const SnakePart = ({currentPosition}) =>{
  return(
    <div
      style={{
        bottom:currentPosition.bottom+'px',
        left:currentPosition.left+'px'
      }}
      className={style.snakePart}
    />
  )
}

export default SnakePart