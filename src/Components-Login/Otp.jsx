import { useLocation } from "react-router-dom";
import shields from "../assets/login/shield2.png";
import contact from "../assets/login/contact.png";
import sendcode from "../assets/right-arrow.png";
import divide from "../assets/Divider.png";
import "./Otp.css";

function Otp() {
  const location = useLocation();

  const method = location.state?.method;
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
        <h1 className="otp-heading">Enter Verification Code</h1>

        <p className="otp-text">
          {method === "email"
            ? "We've sent a 6-digit code to your email j**n@g***l.com"
            : "We've sent a 6-digit code to your mobile number +91 9•••• 5678"}
        </p>

        <div className="otp-boxes">
          <input maxLength="1" className="otp-input" />
          <input maxLength="1" className="otp-input" />
          <input maxLength="1" className="otp-input" />
          <input maxLength="1" className="otp-input" />
          <input maxLength="1" className="otp-input" />
          <input maxLength="1" className="otp-input" />
        </div>

        <button className="code-send" type="button">
          Verify Identity
          <img src={sendcode} className="send-code" alt="send-btn" />
        </button>

        <p className="resend">Didn't receive the code? Resend in 00.58 </p>

        <img src={divide} className="divide" alt="line" />

        <div className="footer-otp">
          <a href="/verification" className="back-option">
            <img src={contact} className="contact-icon" alt="contact-icon" />
            Back to verification options
          </a>

          <a href="/" className="support">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
export default Otp;
