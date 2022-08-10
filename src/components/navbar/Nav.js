import React from 'react'
import style from "./nav.module.scss"
const CustomNav = () => {
  var logo = './images/logo.png'

  return (
    <>
      <div className={style.custom_container}>
        <div className={style.left_side}>
          <img src={logo} alt="" />
        </div>
        <div className={style.right_side}>
          <ul>
            <li>
              Home
            </li>
            <li>
              About Me
            </li>
            <li>
                Portfolio
            </li>
            <li>
              Contact Me
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default CustomNav
