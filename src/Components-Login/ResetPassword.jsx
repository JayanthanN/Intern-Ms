import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import PasswordGuard from "../assets/login/guard.png";
import ResetSafe from "../assets/login/resetsafe.png";
import ResetLockIcon from "../assets/login/forgot.png";
import ResetLock from "../assets/login/lock-icon.png";
import ResetArrow from "../assets/right-arrow.png";

export const ResetPassword = () => {
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
    navigate("/reset-success");
  };

  return (
    <div className="ResetPasswordPage">
      <div className="ResetLeftContainer">
        <div className="ResetHeader">
          <h1>Secure your account.</h1>

          <p>
            Ensure your career progress is protected. Set a strong password to
            continue your journey with InternHub.
          </p>
        </div>
        <div className="SecurityBox">
          <img src={ResetSafe} className="SecurityIcon" alt="resetsafe-icon" />
        </div>

        <div className="ResetFooter">
          <p>&copy;2024 InternMS</p>
          <span className="Point"></span>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="ResetRightContainer">
        <div className="ResetForm">
          <div className="LockTop">
            <img
              src={ResetLockIcon}
              className="ResetLockIcon"
              alt="forgot-icon"
            />
          </div>

          <div className="ResetHeading">
            <h1>Set New Password</h1>

            <p>Your new password must be different from previous passwords.</p>
          </div>

          <label className="ResetNewPass">New Password</label>

          <div className="ResetPassBox">
            <img src={ResetLock} className="ResetLock" alt="lock-icon" />

            <input
              type="password"
              placeholder="Min.8characters"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label className="ResetNewPass"> Confirm New Password</label>

          <div className="ResetPassBox">
            <img
              src={PasswordGuard}
              className="PasswordGuardIcon"
              alt="guard-icon"
            />

            <input
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="ValidationBox">
            <div className="ValidationItem">
              <span
                className={
                  Password === ""
                    ? "Status"
                    : isLengthValid
                      ? "Status Success"
                      : "Status Error"
                }
              ></span>

              <p>At least 8 characters</p>
            </div>
            <div className="ValidationItem">
              <span
                className={
                  isPasswordMatch
                    ? "Status Success"
                    : isPasswordMisMatch
                      ? "Status Error"
                      : "Status"
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
            className="UpdateBtn"
            disabled={!isFormValid}
            onClick={handleUpdate}
          >
            Update Password
            <img src={ResetArrow} className="ResetArrow" alt="right-arrow"/>
          </button>

          <p onClick={() => navigate("/login")} className="ResetLogin">
            Back to Login
          </p>
        </div>
      </div>
    </div>
  )
}
