import React from 'react'
import style from './portfolio.module.scss'
const Portfolio = () => {

    const leftSide = [
        {
            id: 1,
            image: "./images/Group88.png",
            text: "ALPHA PLUS EDUCATIONAL SYSTEM",
            background: "#EFC100"
        },
        {
            id: 2,
            image: "./images/Group89.png",
            text: "VOLT",
            background: "#FFFFFF"
        }
    ]
    const rightSide = [
        {
            id: 1,
            image: "./images/Group90.png",
            text: "ALPHA PLUS EDUCATIONAL SYSTEM",
            background: "#EFC100"
        },
        {
            id: 2,
            image: "./images/Group91.png",
            text: "RIGHTBOUND REPORTING MODULE",
            background: "#EFC100"
        }
    ]



    return (
        <>
            <div className={style.heading}>
                <h1>PORTFOLIO</h1>
            </div>
            <div className={style.container}>
                <div className={style.item}>
                    <div className={style.child1}>
                        {leftSide.map((left) => (
                            <>
                                <div>
                                    <img src={left.image} alt="image" />
                                    <h3>{left.text}</h3>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className={style.child2}>
                        {rightSide.map((right) => (
                            <>
                                <div>
                                    <img src={right.image} alt="image" />
                                    <h3>{right.text}</h3>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <button>Explore More</button>
            </div>
        </>
    )
}

export default Portfolio

