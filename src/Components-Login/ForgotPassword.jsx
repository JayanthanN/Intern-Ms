import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import Lock from "../assets/login/forgot.png";
import RightArrow from "../assets/right-arrow.png";
import BackArrow from "../assets/login/backarrow.png";

export const ForgotPassword = () => {
  const [selected, setSelected] = useState("email");
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/forgot-otp", {
      state: {
        method: selected,
      },
    });
  };
  return (
    <div className="ForgotPage">
      <div className="ForgotLeftContainer">
        <h1 className="ForgotHeading">
          Regain access to your professional future.
        </h1>

        <p className="ForgotContent">
          We're here to help you get back on track. Secure your account and
          continue exploring the best internship opportunities worldwide.
        </p>

        <div className="ForgotLeftFooter">
          <p>&copy;2024 InternMS</p>
          <span className="Dot"></span>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="ForgotRightContainer">
        <div className="ForgotNav">
          <p>Help</p>
          <p onClick={() => navigate("/login")}> Login </p>
        </div>

        <div className="ForgotForm">
          <div className="ForgotHeader">
            <div className="Lock">
              <img src={Lock} className="HeaderLock" alt="forgotlock-icon" />
            </div>
            <h2>Forgot Password?</h2>

            <p className="ForgotText">
              Choose your preferred method to receive a one-time verification
              code.
            </p>

            <h5>Verification Method</h5>
          </div>

          <div className="MethodCard">
            <label
              className={`MailForgot ${selected === "email" ? "active" : ""}`}
              onClick={() => setSelected("email")}
            >
              <input
                type="radio"
                name="forgot"
                checked={selected === "email"}
                onChange={() => setSelected("email")}
                className="ForgotRadio"
              />

              <div className="ForgotInfo">
                <h4>Email Address</h4>

                <p>Send code to j**n@g***l.com</p>
              </div>
            </label>
          </div>

          <div className="MethodCard">
            <label
              className={`MobileForgot ${selected === "mobile" ? "active" : ""}`}
              onClick={() => setSelected("mobile")}
            >
              <input
                type="radio"
                name="forgot"
                checked={selected === "mobile"}
                onChange={() => setSelected("mobile")}
                className="ForgotRadio"
              />

              <div className="ForgotInfo">
                <h4>SMS / Text Message</h4>

                <p>Send code to +91 9•••• •5678</p>
              </div>
            </label>
          </div>

          <button className="SendVerificationButton" onClick={handleSend}>
            Send Verification Code
            <img src={RightArrow} className="RightArrow" alt="rightarrow" />
          </button>

          <div className="ForgotRightFooter">
            <img src={BackArrow} className="BackArrow" alt="backarrow" />

            <p className="LoginBack" onClick={() => navigate("/login")}>
              Back to Login
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
