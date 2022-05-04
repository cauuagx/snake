import style from './apple.module.sass'

const Apple = ({position}) =>{
    return(
      <div
        style={{
          bottom:position.bottom+'px',
          left:position.left+'px',
          zIndex:5
        }}
        className={style.appleSize}>
        <img src="apple.svg" alt=""/>
      </div>
    )
}

export default Apple