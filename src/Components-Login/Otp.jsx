import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import shields from "../assets/login/shield2.png";
import contact from "../assets/login/contact.png";
import sendcode from "../assets/right-arrow.png";
import "./Otp.css";

function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

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

    navigate("/");
  };
  return (
    <div className="otp-content">
      <div className="otp-left-container">
        <div className="shields-box">
          <img src={shields} className="shields-icon" alt="shields-icon" />
        </div>

        <h2>Security first.</h2>

        <p>
          We take your account security seriously. Verify your identity to
          protect your internship applications and sensitive professional data.
        </p>

        <div className="otp-footer">
          <p>Joined by 10k+ professionals</p>
        </div>
      </div>

      <div className="otp-right-container">
        <div className="otp-header">
          <h1 className="otp-heading">Enter Verification Code</h1>

          <p className="otp-text">
            {method === "email"
              ? "We've sent a 6-digit code to your email j**n@g***l.com"
              : "We've sent a 6-digit code to your mobile number +91 9•••• 5678"}
          </p>
        </div>

        <div className="otp-boxes">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              className="otp-input"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button className="code-send" type="button" onClick={handleVerify}>
          Verify Identity
          <img src={sendcode} className="send-code" alt="send-btn" />
        </button>
        {error && <p className="otp-error">{error}</p>}

        <p className="resend">Didn't receive the code? Resend in 00.58 </p>

        <hr className="divide" alt="line" />

        <div className="footer-otp">
          <p className="back-option" onClick={() => navigate("/verification")}>
            <img src={contact} className="contact-icon" alt="contact-icon" />
            Back to verification options
          </p>

          <p className="support">Contact Support</p>
        </div>
      </div>
    </div>
  );
}
export default Otp;
