import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotOtp.css";
import Guard from "../assets/login/guard.png";
import ShieldIcon from "../assets/login/shield2.png";
import ForgotLockIcon from "../assets/login/lock-icon.png";
import OtpArrow from "../assets/right-arrow.png";
 

export const ForgotOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

    const navigate = useNavigate();
  const inputRefs = useRef([]);


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
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    navigate("/Intern-Ms/reset-password");
  };
  return (
    <div className="ForgotOtpPage">
      <div className="ForgotOtpLeftContainer">
        <div className="ForgotOtpShieldBox">
          <img src={ShieldIcon} className="ForgotOtpShieldIcon" alt="shield-icon" />
        </div>

        <h1>Verify Identity</h1>

        <p>
          We've sent a 6-digit code to your chosen method. Please enter it to
          continue.
        </p>
      </div>
      <div className="ForgotOtpRightContainer">
        <div className="ForgotOtpContainer">
          <h1 className="ForgotOtpHeading">Enter Verification Code</h1>

          <p className="ForgotOtpText">
            We've sent a 6-digit code to your registered Email and phone
            number.The code will expire in <span className="ForgotOtpTimer"> 09:59 </span>{" "}
            minutes.
          </p>

          <div className="ForgotOtpBoxes">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                className="ForgotOtpInput"
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button onClick={handleVerify} className="ForgotOtpButton" type="button">
            Verify and Continue
            <img src={OtpArrow} className="ForgotOtpArrow" alt="right-arrow" />
          </button>

          {error && <p className="ForgotOtpError">{error}</p>}

          <p className="ForgotOtpResend">
            Didn't receive the code? Resend (in 00:55)
          </p>

          <hr className="ForgotOtpDivider" />

          <div className="ForgotOtpFooter">
            <img src={ForgotLockIcon} className="ForgotOtpLockIcon" alt="lock-icon" />

            <p>END-TO-END ENCRYPTED</p>

            <img src={Guard} className="ForgotOtpGuardIcon" alt="shield-icon" />

            <p>SECURE HANDSHAKE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

