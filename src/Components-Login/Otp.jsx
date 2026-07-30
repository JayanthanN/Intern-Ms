import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import Shields from "../assets/login/shield2.png";
import Contact from "../assets/login/contact.png";
import SendCode from "../assets/right-arrow.png";

export const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const inputRefs = useRef([]);

  const method = location.state?.method;

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setError("");
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    navigate("/mentor-dashboard");
  };
  return (
    <div className="OtpPage">
      <div className="OtpLeftContainer">
        <div className="ShieldsBox">
          <img src={Shields} className="ShieldsIcon" alt="shields-icon" />
        </div>

        <h2>Security first.</h2>

        <p>
          We take your account security seriously. Verify your identity to
          protect your internship applications and sensitive professional data.
        </p>

        <div className="OtpFooter">
          <p>Joined by 10k+ professionals</p>
        </div>
      </div>

      <div className="OtpRightContainer">
        <div className="OtpHeader">
          <h1 className="OtpHeading">Enter Verification Code</h1>

          <p className="OtpText">
            {method === "email"
              ? "We've sent a 6-digit code to your email j**n@g***l.com"
              : "We've sent a 6-digit code to your mobile number +91 9•••• 5678"}
          </p>
        </div>

        <div className="OtpBoxes">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              className="OtpInput"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button className="CodeSendBtn" type="button" onClick={handleVerify}>
          Verify Identity
          <img src={SendCode} className="SendCodeArrow" alt="send-btn" />
        </button>
        {error && <p className="OtpError">{error}</p>}

        <p className="Resend">Didn't receive the code? Resend in 00.58 </p>

        <hr className="DivideLine" />

        <div className="FooterOtp">
          <p className="BackOption" onClick={() => navigate("/verification")}>
            <img src={Contact} className="ContactIcon" alt="contact-icon" />
            Back to verification options
          </p>

          <p className="SupportLink">Contact Support</p>
        </div>
      </div>
    </div>
  )
}
