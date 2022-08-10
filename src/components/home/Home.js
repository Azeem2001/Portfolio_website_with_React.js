import React from 'react'
import CustomButton from '../button/CustomButton'
import Nav from '../navbar/Nav'
import style from "./home.module.scss"

const Home = () => {
  return (
    <React.Fragment >
      
    <div className={style.custom_container}>
      <div className={style.item_container}>
        <div className={style.nav_bar}>
          <Nav />
        </div>
        <div className={style.center}>
          <h1>HELLO MY NAME IS HAMZA</h1>
          <h2>I AM A FULL STACK ENGINEER</h2>
          <CustomButton />
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Home