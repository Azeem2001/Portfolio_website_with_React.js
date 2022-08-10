import React from "react";
import style from "./carosal.module.scss";
import Carousel from "react-elastic-carousel";

const Carosal = () => {
    const profile = "./images/slider_profile.png";
    const stars = "./images/star.png";
    const icons = "/images/coma.png";

    return (
        <>
            <Carousel showArrows={false}>
                <div className={style.container}>
                    <div className={style.item}>
                        <div className={style.child1}>
                            <img src={icons} alt="icon" />
                            <p>
                                There are many different animals in the zoo, but I liked the
                                giraffe the most. He is very kind and sociable. I will come to
                                the giraffe every week.
                            </p>
                            <h5>John Clark</h5>
                            <img src={stars} alt="stars" />
                        </div>
                        <div className={style.child2}>
                            <img src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.item}>
                        <div className={style.child1}>
                            <img src={icons} alt="icon" />
                            <p>
                                There are many different animals in the zoo, but I liked the
                                giraffe the most. He is very kind and sociable. I will come to
                                the giraffe every week.
                            </p>
                            <h5>John Clark</h5>
                            <img src={stars} alt="stars" />
                        </div>
                        <div className={style.child2}>
                            <img src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.item}>
                        <div className={style.child1}>
                            <img src={icons} alt="icon" />
                            <p>
                                There are many different animals in the zoo, but I liked the
                                giraffe the most. He is very kind and sociable. I will come to
                                the giraffe every week.
                            </p>
                            <h5>John Clark</h5>
                            <img src={stars} alt="stars" />
                        </div>
                        <div className={style.child2}>
                            <img src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.item}>
                        <div className={style.child1}>
                            <img src={icons} alt="icon" />
                            <p>
                                There are many different animals in the zoo, but I liked the
                                giraffe the most. He is very kind and sociable. I will come to
                                the giraffe every week.
                            </p>
                            <h5>John Clark</h5>
                            <img src={stars} alt="stars" />
                        </div>
                        <div className={style.child2}>
                            <img src={profile} alt="profile" />
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default Carosal;
