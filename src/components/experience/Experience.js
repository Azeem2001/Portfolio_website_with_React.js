import React from "react";
import style from "./experience.module.scss";
const Experience = () => {
    const arrayRight = [
        {
            image: "./images/Group 34.png",
            heading: "FULL STACK ENGINEER",
            subheading: "ARCHITECTED RELATIONS",
            Span: "2021 - 2022",
            paragraph:
                "Working as a software development associate and developing amazing products for clients throughout the world.",
        },
        {
            image: "./images/Group 36.png",
            heading: "FRONTEND DEVELOPER",
            subheading: "SOPRANO.AI",
            Span: "2019 - 2020",
            paragraph:
                "Working as a frontend engineer and developing amazing application for clients maintain the UI UX of production application ",
        },
        {
            image: "./images/Group 38.png",
            heading: "FRONTEND  ENGINEER",
            subheading: "RIGHTBOUND",
            Span: "2019 - 2020",
            paragraph:
                "Responsible for developing, designing, modeling and documenting the software solutions. Ability to develop.",
        },
        {
            image: "./images/Group 40.png",
            heading: "FRONTEND  ENGINEER",
            subheading: "VALOHAI",
            Span: "2017 - 2018",
            paragraph:
                "Responsible for developing clean, readable & maintainable solutions. Mostly work on JavaScript technologies like ReactJS",
        },

    ];
    const arrayLeft = [
        {
            image: "./images/Group 35.png",
            heading: "FULL STACK DEVELOPER",
            subheading: "MINTDROPZ",
            Span: "2020 - 2021",
            paragraph:
                "Build full stack applications for both web and mobile. Deliver clean, readable and efficient solutions following.",
        },
        {
            image: "./images/Group 37.png",
            heading: "SOFTWARE DEVELOPER",
            subheading: "SOPRANO.AI",
            Span: "2018 - 2019",
            paragraph:
                "Write and test code, refining and rewriting it as necessary, and communicate with any programmers involved in the project.",
        },
        {
            image: "./images/Group 39.png",
            heading: "FRONTEND DEVELOPER",
            subheading: "HOLON-IQ",
            Span: "2018 - 2019",
            paragraph:
                "Working on tables charts data modelling and APIs integration creating pages with latest frontend technology",
        },
        {
            image: "./images/Group 41.png",
            heading: "INTERNEE",
            subheading: "Panacloud Pvt Ltd",
            Span: "2018 - 2019",
            paragraph:
                "Selected as a bootcamper after passing some axams and start learning latest technologies like Docker Kubernetes AWS Ansible CI CD ",
        },

    ];

    return <>

        <div className={style.container}>
            <div className={style.Item}>
                <div className={style.child_1}>
                    <h1>ACADEMICS</h1>
                    {arrayRight.map((right) => (
                        <>
                            <div className={style.sub_container} key={right.id}>
                                <img src={right.image} alt="logos" />
                                <div className={style.children} >
                                    <h4>{right.heading}</h4>
                                    <h5>{right.subheading}</h5>
                                    <p>{right.Span}</p>
                                    <h6>{right.paragraph}</h6>

                                </div>
                            </div>
                        </>
                    ))}

                </div>

                <div className={style.child_2}>
                    {arrayLeft.map((left) => (
                        <>
                            <div className={style.sub_container} key={left.id}>
                                <img src={left.image} alt="logos" />
                                <div className={style.children} >
                                    <h4>{left.heading}</h4>
                                    <h5>{left.subheading}</h5>
                                    <p>{left.Span}</p>
                                    <h6>{left.paragraph}</h6>
                                </div>
                            </div>

                        </>
                    ))}
                </div>

            </div>
            {/* <div className={style.foot}>
                <h3>WHAT MY CLIENT SAY ?</h3>
            </div> */}
        </div>

    </>;
};

export default Experience;
