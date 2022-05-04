import style from './apple.module.sass'

const Apple = ({position}) =>{
    return(
      <div
        style={{
          bottom:position.bottom+'px',
          left:position.left+'px'
        }}
        className={style.appleSize}>
        <img src="apple.svg" alt=""/>
      </div>
    )
}

export default Apple