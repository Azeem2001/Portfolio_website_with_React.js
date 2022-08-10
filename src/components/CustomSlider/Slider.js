import React, { useState } from "react";
import CustomButton from "../button/CustomButton";
// import { Button } from "reactstrap";
import style from "./slider.module.scss"
import Marquee from "react-fast-marquee";
const Slider = () => {
    const [image, setImage] = useState([
        {
            id: 1,
            images: "./images/Group_1.png",
        },
        {
            id: 2,
            images: "./images/Group_2.png",
        },
        {
            id: 3,
            images: "./images/Group_3.png",
        },
        {
            id: 4,
            images: "./images/Group_4.png",
        },
        {
            id: 4,
            images: "./images/Group_ 4.png",
        },
        {
            id: 5,
            images: "./images/Group_5.png",
        },
        {
            id: 6,
            images: "./images/Group_6.png"
        },
        {
            id: 7,
            images: "./images/Group_7.png",
        },
        {
            id: 8,
            images: "./images/Group_8.png",
        },
        {
            id: 9,
            images: "./images/Group_9.png",
        },
        {
            id: 10,
            images: "./images/Group_10.png",
        },
        {
            id: 11,
            images: "./images/Group_11.png",
        },
        {
            id: 12,
            images: "./images/Group_12.png",
        }
    ]);
    return (
        <>
            <Marquee speed={70}>
                <div className={style.container}>
                    {image.map((logo) => (
                        <div className={style.children} key={logo.id}>
                            <img src={logo.images} alt="logos" />
                        </div>
                    ))}

                </div>
            </Marquee>
            <div className={style.btn}>
            <CustomButton />
            </div>
        </>
    );
};

export default Slider;
