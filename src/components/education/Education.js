import React, { useState } from 'react'
import style from './education.module.scss'
const Education = () => {
    const profile = "./images/Group 46.png"
    const [context, setContext] = useState([
        {
            image: "./images/Logo4.png",
            heading: "ILMA UNIVERSITY-FORMERLY IBT",
            subheading: "BSCS,COMPUTER SCIENCE",
            Span: "2016 - 2020"

        },
        {
            image: "./images/Logo2.png",
            heading: "THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
            subheading: "SPECIALIZAION,COMPUTER SOFTWARE ENGINEERING",
            Span: "2018 - 2019",

        },
        {
            image: "./images/Logo1.png",
            heading: "Aligarh institute of technology pakistan",
            subheading: "High School Diploma, Electrical and Electronics Engineering",
            Span: "2016 - 2020"

        },
        {
            image: "./images/Logo3.png",
            heading: "SHAHEEN PUBLIC SCHOOL ",
            subheading: "MATRICULATION",
            Span: "2009 - 2010"

        }

    ])
    return (
        <div className={style.container}>
            <div className={style.Item}>
                <div className={style.child_1}>
                    <h1>ACADEMICS</h1>
                    {context.map((educ) => (
                        <>
                            <div className={style.sub_container} key={educ.id}>
                                <img src={educ.image} alt="logos" />
                                <div className={style.children} >
                                    <h4>{educ.heading}</h4>
                                    <h5>{educ.subheading}</h5>
                                    <p>{educ.Span}</p>
                                </div>
                            </div>
                        </>
                    ))}

                </div>

                <div className={style.child_2}>
                    <img src={profile} alt="" />
                </div>

            </div>
            <div className={style.foot}>
                <h3>4+<small>year of experience</small></h3>
                <h3>100+<small>projects completed</small></h3>
                <h3>50+<small>satisfied clients</small></h3>
            </div>
        </div>
    )
}

export default Education