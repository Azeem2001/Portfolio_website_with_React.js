import React from 'react'
import CustomButton from '../button/CustomButton'
import style from './info.module.scss'
const Info = () => {
    const profile = "./images/profile.png"
    return (
        <div className={style.container}>
            <div className={style.Item}>
                <div className={style.child_1}>
                    <h1>WHO I AM ?</h1>
                    <p>I am a passionate Full stack developer with more than 4 years experience working for many companies and startups, I love to create applications around web and mobile with neat and clean code using best practices , test driven approach , latest trends in technology and using scalable architecture.</p>
                    <p>Launched multiple projects with different teams. I am always ready for new challanges. I transform Ideas into products. Customer Satisfaction is my foremost duty because I believe in long term relationships.</p>
                    <CustomButton/>
                </div>

                <div className={style.child_2}>
                    <img src={profile} alt="" />
                </div>
               
            </div>
            <div className={style.foot}>
                    <h2>COMPANIES I HAVE WORKED WITH</h2>
             </div>
        </div>
    )
}

export default Info