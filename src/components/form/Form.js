import React from "react";
import style from "./form.module.scss";
const Form = () => {
    const image = "./images/hamza.png";
    const facebook = "./images/Facebook.png";
    const instagram = "./images/Instagram.png";
    const lindin = "./images/Linkdin.png";
    const twitter = "./images/Twitter.png";
    const github = "./images/Github.png";

    return (
        <>
            <div className={style.container}>
                <h1>CONTACT ME</h1>
                <div className={style.item}>
                    <div className={style.info}>
                        <div className={style.email}>
                            <h4>Email</h4>

                            <p>hamzakhann66@gmail.com</p>
                        </div>
                        <div className={style.adress}>
                            <h4>ADDRESS</h4>
                            <p>
                                A-17, NCEHS, Row-2, Block 10 Gulshan-e-Iqbal, Oppst Aladin Park
                                , adjacent to Elegant Coaching center Karachi, 75300
                            </p>
                        </div>
                        <div className={style.phone}>
                            <h4>PHONE</h4>
                            <p>+92341 - 2682080</p>
                            <p>+92331 - 2524490</p>
                        </div>
                    </div>
                    <div className={style.form}>
                        <p>
                            Once you submit a form I will contact you within two business
                            days.
                        </p>
                        <form action="">
                            <input type="text" placeholder="FIRST NAME" />
                            <br />
                            <input type="text" placeholder="LAST NAME" />
                            <br />
                            <input type="email" placeholder="EMAIL ADDRESS" />
                            <br />
                            <textarea
                                name="text"
                                className={style.text}
                                cols="30"
                                rows="6"
                                placeholder="WRITE THE REQUIREMENTS OF YOUR PROJECT."
                            ></textarea>
                            <button>SUBMIT QUERY</button>
                        </form>
                        
                    </div>
                </div>
                <div className={style.footer}>
                        <div className={style.images}>
                            <img src={image} alt="logo" />
                            </div>
                            <div className={style.content}>
                                <p>2022 Hamza Khan All rights reserved</p>
                                <div>
                                   <img src={instagram} alt="instagram" />
                                   <img src={lindin} alt="lindin" />
                                   <img src={facebook} alt="facebook" />
                                   <img src={twitter} alt="twitter" />
                                   <img src={github} alt="github" />

                                </div>
                            </div>
                        </div>
            </div>
        </>
    );
};

export default Form;
