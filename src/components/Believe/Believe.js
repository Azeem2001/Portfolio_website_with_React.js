import React from 'react'
import CustomButton from '../button/CustomButton'
import style from './believe.module.scss'
const Believe = () => {
    const profile = "./images/Group 45.png"
    return (
        <div className={style.container}>
            <div className={style.Item}>
                <div className={style.child_1}>
                    <h1>MY BELIEVE</h1>
                    <p>I believe in teamwork. I believe a group of people who work together can accomplish really big goals. When people work together and encourage each other great things happen.</p>
                    <p>Working in teams increases collaboration and allows brainstorming. As a result, more ideas are developed and productivity improves. Two or more people are always better than one for solving problems, finishing off difficult tasks and increasing creativity.</p>
                    <h5>Let’s connect with me so we can do something big:</h5>
                    <CustomButton />
                </div>

                <div className={style.child_2}>
                    <img src={profile} alt="" />
                </div>

            </div>
            <div className={style.foot}>
                <h2>TECHNOLOGY I USED</h2>
            </div>
        </div>
    )
}

export default Believe