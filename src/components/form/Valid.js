import React, { useState } from "react";
import style from "./form.module.scss";

const Form = () => {
  const image = "./images/hamza.png";
  const facebook = "./images/Facebook.png";
  const instagram = "./images/Instagram.png";
  const lindin = "./images/Linkdin.png";
  const twitter = "./images/Twitter.png";
  const github = "./images/Github.png";
  // const basUrl = "https://young-earth-56292.herokuapp.com/send/data";
  // const [loading, setLoading] = useState("false");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [disciption, setDiscription] = useState("");
  const [error, setError] = useState("");
  const [firstNameError, setFistNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [discriptionerror, setDiscriptionError] = useState("");

  function saveUser() {
    // setLoading(false);

    if (!firstName) {
      setFistNameError("plz Enter the First Name");
    } else if (!lastName) {
      setLastNameError("plz Enter the Last Name");
    } else if (!email) {
      setError("email is not valid");
    } else if (!disciption) {
      setDiscriptionError("Disc must be important");
    } else {
      let body = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        description: disciption,
      };
      fetch("https://young-earth-56292.herokuapp.com/send/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((result) => {
          result.json().then((res) => {
            // setLoading(false);
            alert(res.status);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // console.warn({ firstName, lastName, email, disciption })
  }

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
            <form action="submit">
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                name="firstname"
                placeholder="FIRST NAME"
              />
              {firstNameError && (
                <p className={style.error}> {firstNameError} </p>
              )}

              <br />
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                name="lastname"
                placeholder="LAST NAME"
              />
              {lastNameError && (
                <p className={style.error}> {lastNameError} </p>
              )}

              <br />

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder="EMAIL ADDRESS"
              />
              {error && <p className={style.error}> {error} </p>}

              <br />
              <textarea
                name="text"
                value={disciption}
                onChange={(e) => {
                  setDiscription(e.target.value);
                }}
                className={style.text}
                cols="30"
                rows="6"
                placeholder="WRITE THE REQUIREMENTS OF YOUR PROJECT."
              ></textarea>
              {discriptionerror && (
                <p className={style.error}> {discriptionerror} </p>
              )}

              {/* {loading ? (
                <p>Loading</p>
              ) : ( */}
              <button type="button" onClick={saveUser}>
                SUBMIT QUERY
              </button>
              {/* )} */}

              <div></div>
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
