import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Guard from "../assets/login/guard.png";
import shield2 from "../assets/login/shield2.png";
import locked from "../assets/login/lock-icon.png";
import forgotright from "../assets/right-arrow.png";
import "./ForgotOtp.css";

function ForgotOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const inputRefs = useRef([]);
  const navigate = useNavigate();

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

    navigate("/reset-password");
  };
  return (
    <div className="Forgototp-page">
      <div className="Forgot-left">
        <div className="proshield-icon">
          <img src={shield2} className="proshield" alt="shield-icon" />
        </div>

        <h1>Verify Identity</h1>

        <p>
          We've sent a 6-digit code to your chosen method. Please enter it to
          continue.
        </p>
      </div>
      <div className="Forgot-right">
        <div className="otp-container">
          <h1 className="forgot-otp-heading">Enter Verification Code</h1>

          <p className="para-forgot">
            We've sent a 6-digit code to your registered Email and phone
            number.The code will expire in <span className="num"> 09:59 </span>{" "}
            minutes.
          </p>

          <div className="forgototp-box">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                className="forgototp-input"
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button onClick={handleVerify} className="otp-send" type="button">
            Verify and Continue
            <img src={forgotright} className="forgotright" alt="right-arrow" />
          </button>

          {error && <p className="otp-error">{error}</p>}

          <p className="code-resend">
            Didn't receive the code? Resend (in 00:55)
          </p>

          <hr className="split" />

          <div className="forgot-end">
            <img src={locked} className="locked" alt="lock-icon" />

            <p>END-TO-END ENCRYPTED</p>

            <img src={Guard} className="Guard" alt="shield-icon" />

            <p>SECURE HANDSHAKE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotOtp;
