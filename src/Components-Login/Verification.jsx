import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verification.css";
import ShieldIcon from "../assets/login/shield.png";
import LeftArrow from "../assets/login/left-arrow.png";
import VerifyArrow from "../assets/right-arrow.png";
import VerifyMail from "../assets/login/verify-mail.png";
import VerifyMobile from "../assets/login/mobile.png";

export const Verification = () => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!selected) {
      setError("Please select a verification method.");
      return;
    }

    setError("");

    navigate("/Otp", {
      state: {
        method: selected,
      },
    });
  };
  return (
    <div className="VerificationPage">
      <div className="VerificationLeftContainer">
        <h2 className="VerificationHeading">Secure Your Account</h2>

        <p className="VerificationText">
          Protecting your professional profile and application history is our
          top priority. Choose a method to verify your identity.
        </p>

        <div className="VerificationStats">
          <div className="ShieldBox">
            <img src={ShieldIcon} className="ShieldIcon" alt="shield-icon" />
          </div>

          <div className="VerificationStatBox">
            <h4>256-bit Encryption</h4>
            <p>Bank-grade security standards</p>
          </div>
        </div>

        <p className="VerificationFooter">&copy; 2024 InternMS</p>
      </div>

      <div className="VerificationRightContainer">
        <div className="VerificationHeader">
          <h1 className="VerificationTitle">Two-Step Verification</h1>

          <p className="VerificationSubText">
            Choose how you'd like to verify your identity.
          </p>
        </div>

        <label
          className={`MailCard ${selected === "email" ? "active" : ""}`}
          onClick={() => {
            setSelected("email");
            setError("");
          }}
        >
          <div className="MailIconBox">
            <img src={VerifyMail} alt="mail-icon" />
          </div>

          <div className="VerificationInfo">
            <h4>Email Verification</h4>

            <p>j**n@g***l.com</p>
          </div>

          <input
            type="radio"
            name="verification"
            checked={selected === "email"}
            onChange={() => setSelected("email")}
            className="VerificationRadio"
          />
        </label>

        <label
          className={`MobileCard ${selected === "mobile" ? "active" : ""}`}
          onClick={() => {
            setSelected("mobile");
            setError("");
          }}
        >
          <div className="MobileIconBox">
            <img src={VerifyMobile} alt="mobile-icon" />
          </div>

          <div className="VerificationInfo">
            <h4>Mobile Verification</h4>

            <p>+91 9**** *5678</p>
          </div>

          <input
            type="radio"
            name="verification"
            checked={selected === "mobile"}
            onChange={() => setSelected("mobile")}
            className="VerificationRadio"
          />
        </label>

        <button
          className="VerificationSendButton"
          type="button"
          onClick={handleSend}
        >
          Send Verification Code
          <img src={VerifyArrow} className="VerifyArrow" alt="right-arrow" />
        </button>
        {error && <p className="VerifyError">{error}</p>}

        <p className="BackLogin" onClick={() => navigate("/login")}>
          <img src={LeftArrow} className="LeftArrow" alt="left-arrow" />
          Back to login{" "}
        </p>

        <hr className="DividerLine" />

        <p className="HelpSection">
          Need help?
          <span>Contact Support</span>
        </p>
      </div>
    </div>
  )
}
