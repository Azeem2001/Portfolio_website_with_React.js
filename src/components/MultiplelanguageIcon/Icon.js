import React from 'react'
import style from './icon.module.scss'
const Icon = () => {
 const image = './images/Icons.png'

    return (
    <div className={style.Icon_container} >
          <img src={image} alt="" />
          {/* <h1>Hello Worlds</h1> */}
    </div>
  )
}

export default Icon
