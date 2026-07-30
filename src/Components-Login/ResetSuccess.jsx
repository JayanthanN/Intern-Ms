import { useNavigate } from "react-router-dom";
import "./ResetSuccess.css";
import SuccessIcon from "../assets/login/success-icon.png";
import SuccessImg from "../assets/login/success-img.png";
import SuccessTick from "../assets/login/success-tick.png";


export const ResetSuccess = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="ResetSuccessPage">
      <div className="ResetSuccessLeftContainer">
        <div className="ResetSuccessTickBox">
          <img
            src={SuccessTick}
            className="SuccessTick"
            alt="successtick-icon"
          />
        </div>

        <h1>Password reset successfully</h1>

        <p>
          Your security is our priority. You can now log in with your new
          credentials.
        </p>

      
          <img src={SuccessImg} className="ResetSuccessImage" alt="successimg" />
        
      </div>
      <div className="ResetSuccessRightContainer">
        <div className="SuccessContent">
          <div className="ResetSuccessAction">
            <img src={SuccessIcon} className="SuccessActionIcon"  alt="success-icon"/>
            <p>Action Complete</p>
          </div>

          <div className="ResetSuccessText">
            <h1>Success</h1>

            <p>
              Your password has been updated. To keep your account secure, we
              recommend not sharing your password with anyone.
            </p>
          </div>

          <button onClick={handleLogin} className="SuccessLoginButton">
            Back to Login
          </button>

          <hr className="SuccessDivider"  />
        </div>
      </div>
    </div>
  )
}

