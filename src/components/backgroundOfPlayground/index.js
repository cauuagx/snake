import style from './backgroundOfPlayground.module.sass'
import React from 'react'

export default React.memo(function BackgroundOfPlayground() {
  return (
    <div className={style.background}>
      <img src="./backgroundForPlayground.png" alt=""/>
    </div>
  )
})