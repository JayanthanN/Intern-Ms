import { useNavigate } from "react-router-dom";
import successicon from "../assets/login/success-icon.png";
import successimg from "../assets/login/success-img.png";
import successtick from "../assets/login/success-tick.png";
import "./ResetSuccess.css";

function ResetSuccess() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="Reset-successpage">
      <div className="success-left-container">
        <div className="success-tick">
          <img
            src={successtick}
            className="successtick"
            alt="successtick-icon"
          />
        </div>

        <h1>Password reset successfully</h1>

        <p>
          Your security is our priority. You can now log in with your new
          credentials.
        </p>

        <div className="img-box">
          <img src={successimg} className="successimg" alt="successimg" />
        </div>
      </div>
      <div className="success-rightcontainer">
        <div className="success-content">
          <div className="action">
            <img src={successicon} className="successicon" />
            <p>Action Complete</p>
          </div>

          <div className="success-text">
            <h1>Success</h1>

            <p>
              Your password has been updated. To keep your account secure, we
              recommend not sharing your password with anyone.
            </p>
          </div>

          <button onClick={handleLogin} className="success-login">
            Back to Login
          </button>

          <hr className="divline" alt="line" />
        </div>
      </div>
    </div>
  );
}
export default ResetSuccess;
