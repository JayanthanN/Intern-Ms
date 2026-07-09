import { useNavigate } from "react-router-dom";
import Guard from "../assets/pages/guard.png";
import shield2 from "../assets/pages/shield2.png";
import locked from "../assets/pages/lock-icon.png";
import forgotright from "../assets/right-arrow.png";
import split from "../assets/Divider.png";
import "./ForgotOtp.css";

function ForgotOtp() {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/Reset-password");
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
          <h1 className="forgot-heading">Enter Verification Code</h1>

          <p className="para-forgot">
            We've sent a 6-digit code to your registered Email and phone
            number.The code will expire in <span className="num"> 09:59 </span>{" "}
            minutes.
          </p>

          <div className="forgototp-box">
            <input maxLength="1" className="forgototp-input" />
            <input maxLength="1" className="forgototp-input" />
            <input maxLength="1" className="forgototp-input" />
            <input maxLength="1" className="forgototp-input" />
            <input maxLength="1" className="forgototp-input" />
            <input maxLength="1" className="forgototp-input" />
          </div>

          <button onClick={handleVerify} className="otp-send" type="button">
            Verify and Continue
            <img src={forgotright} className="forgotright" alt="right-arrow" />
          </button>

          <p className="code-resend">
            Didn't receive the code? Resend (in 00:55)
          </p>

          <img src={split} className="split" />

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
