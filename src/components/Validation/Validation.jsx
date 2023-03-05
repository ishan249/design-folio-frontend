import { React, useState } from "react";
import axios from "axios";
import "./Validation.css";
import { ReactComponent as Svglogo } from "../../images/undraw_portfolio_update_re_jqnp.svg";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loadingspinner from "../Loadingspinner/Loadingspinner";
function Validation(props) {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [otp, setOtp] = useState(0);
  const [userFound, setUserFound] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const username = mail.split("@")[0];

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomNum);
    const otpp = randomNum;
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_PORTFOLIO}/email/validate?email=${mail}&otp=${otpp}`,
    })
      .then((res) => {
        if (res.data === "user not found") {
          props.onSubmit(randomNum);
          setIsLoading(false);
        } else {
          setUserFound("Looks like this Email Id is already registered.");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="validation-main-div">
      <header className="text-center heading font-poppins pt-2">
        Instructions
      </header>
      <div className="flex flex-wrap-reverse justify-around instruction-box">
        <div className="box svgBox">
          <Svglogo />
        </div>
        <div className="box font-poppins text-white">
          <li className="px-2">
            Make sure internet is working fine while filling forms otherwise you
            have to fill all forms again.
          </li>
          <li className="px-2 py-2">
            Follow the instructions given about every field in form while
            filling the information to create good portfolio.
          </li>
          <li className="px-2 py-2">Verify your email first to proceed.</li>
          <div className="email-form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                className="inputBox"
                placeholder="Enter your Email address"
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <button className="start-btn" type="submit">
                {isloading ? <Loadingspinner /> : <span>Verify</span>}
              </button>

              {userFound !== "" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white font-poppins pt-4"
                >
                  {" "}
                  <span>❗❗</span> {userFound} Please go through{" "}
                  <Link to={`designfolio.onrender.com/${username}`}>
                    {" "}
                    <span className="underline">
                     this link
                    </span>{" "}
                  </Link>
                  to check it out.
                </motion.div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;
