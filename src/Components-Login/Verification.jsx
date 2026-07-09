import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shieldicon from "../assets/pages/shield.png";
import leftarrow from "../assets/pages/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";
import verifymail from "../assets/pages/verify-mail.png";
import verifymobile from "../assets/pages/mobile.png";
import dividerline from "../assets/Divider.png";
import "./Verification.css";

function Verification() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/Otp", {
      state: {
        method: selected,
      },
    });
  };
  return (
    <div className="verification-container">
      <div className="left-container">
        <h2 className="verify-heading">Secure Your Account</h2>

        <p className="verify-text">
          Protecting your professional profile and application history is our
          top priority. Choose a method to verify your identity.
        </p>

        <div className="verify-stats">
          <div className="shield-box">
            <img src={shieldicon} className="shield-icon" alt="shield-icon" />
          </div>

          <div className="verify-statbox">
            <h4>256-bit Encryption</h4>
            <p>Bank-grade security standards</p>
          </div>
        </div>

        <p className="verify-footer">&copy; 2024 InternMS</p>
      </div>

      <div className="right-container">
        <div className="verify-mail">
          <h1 className="Two-step">Two-Step Verification</h1>

          <p className="Two-step-text">
            Choose how you'd like to verify your identity.
          </p>
        </div>

        <label
          className={`Mail-card ${selected === "email" ? "active" : ""}`}
          onClick={() => setSelected("email")}
        >
          <div className="icon-section">
            <img
              src={verifymail}
              className="verify-mail-icon"
              alt="mail-icon"
            />
          </div>

          <div className="info">
            <h4>Email Verification</h4>

            <p>j**n@g***l.com</p>
          </div>

          <input
            type="radio"
            name="verification"
            checked={selected === "email"}
            onChange={() => setSelected("email")}
            className="verification"
          />
        </label>

        <label
          className={`Mobile-card ${selected === "mobile" ? "active" : ""}`}
          onClick={() => setSelected("mobile")}
        >
          <div className="icon-section2">
            <img
              src={verifymobile}
              className="verify-mobile-icon"
              alt="mobile-icon"
            />
          </div>

          <div className="info">
            <h4>Mobile Verification</h4>

            <p>+91 9**** *5678</p>
          </div>

          <input
            type="radio"
            name="verification"
            checked={selected === "mobile"}
            onChange={() => setSelected("mobile")}
            className="verification"
          />
        </label>

        <button className="send-btn" type="button" onClick={handleSend}>
          Send Verification Code
          <img src={rightarrow} className="right-arrow" alt="right-arrow" />
        </button>

        <a href="/login" className="back-login">
          <img src={leftarrow} className="left-arrow" alt="left-arrow" />
          Back to login{" "}
        </a>

        <img src={dividerline} className="divider-line" alt="divider-line" />

        <p className="help">
          Need help?
          <a href="/">Contact Support</a>
        </p>
      </div>
    </div>
  );
}

export default Verification;
