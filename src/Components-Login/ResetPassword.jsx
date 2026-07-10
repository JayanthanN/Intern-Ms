import { useState } from "react";
import { useNavigate } from "react-router-dom";
import guardicon from "../assets/login/guard.png";
import resetsafe from "../assets/login/resetsafe.png";
import lockicon from "../assets/login/forgot.png";
import Lockedicon from "../assets/login/lock-icon.png";
import resetarrow from "../assets/right-arrow.png";
import "./ResetPassword.css";

function ResetPassword() {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLengthValid = Password.length >= 8;

  const isPasswordMatch =
    Password !== "" && confirmPassword !== "" && Password === confirmPassword;

  const isPasswordMisMatch =
    confirmPassword !== "" && Password !== confirmPassword;

  const isFormValid = isLengthValid && isPasswordMatch;

  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate("/Reset-success");
  };

  return (
    <div className="Reset-container">
      <div className="reset-left-container">
        <div className="reset-header">
          <h1>Secure your account.</h1>

          <p>
            Ensure your career progress is protected. Set a strong password to
            continue your journey with InternHub.
          </p>
        </div>
        <div className="security-box">
          <img src={resetsafe} className="security-icon" alt="resetsafe-icon" />
        </div>

        <div className="reset-footer">
          <p>&copy;2024 InternMS</p>
          <span className="point"></span>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="reset-right-container">
        <div className="lock-top">
          <img src={lockicon} className="lockicon" alt="forgot-icon" />
        </div>

        <div className="reset-head">
          <h1>Set New Password</h1>

          <p>Your new password must be different from previous passwords.</p>
        </div>

        <label className="new-pass">New Password</label>

        <div className="pass-box">
          <img src={Lockedicon} className="Lockedicon" alt="lock-icon" />

          <input
            type="password"
            placeholder="Min.8characters"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label className="new-pass"> Confirm New Password</label>

        <div className="pass-box">
          <img src={guardicon} className="guardicon" alt="guard-icon" />

          <input
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="validation-box">
          <div className="validation-item">
            <span
              className={isLengthValid ? "status success" : "status"}
            ></span>

            <p>At least 8 characters</p>
          </div>
          <div className="validation-item">
            <span
              className={
                isPasswordMatch
                  ? "status success"
                  : isPasswordMisMatch
                    ? "status error"
                    : "status"
              }
            ></span>

            <p>
              {confirmPassword === ""
                ? "Passwords match"
                : isPasswordMatch
                  ? "Passwords match"
                  : "Passwords do not match"}
            </p>
          </div>
        </div>

        <button
          className="update-btn"
          disabled={!isFormValid}
          onClick={handleUpdate}
        >
          Update Password
          <img src={resetarrow} className="resetarrow" />
        </button>

        <a href="/login" className="reset-login">
          Back to Login
        </a>
      </div>
    </div>
  );
}

export default ResetPassword;
