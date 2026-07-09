import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MailIcon from "../assets/pages/mail-icon.png";
import lockIcon from "../assets/pages/lock-icon.png";
import eyeIcon from "../assets/pages/eye-icon.png";
import ArrowIcon from "../assets/pages/arrow.png";
import GoogleIcon from "../assets/pages/Google-icon.png";
import Divider from "../assets/Divider.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful");

      console.log({
        email,
        password,
      });

      navigate("/verification");
    }
  };
  return (
    <div className="login-page">
      <div className="hero-container">
        <h2 className="hero-logo">InternHub</h2>

        <h2 className="hero-heading">Your next big leap starts here</h2>

        <p className="hero-text">
          Connect with industry leaders, manage your applications, and
          accelerate your career path with our comprehensive internship
          management platform.
        </p>

        <div className="hero-stats">
          <div className="hero-statbox">
            <h3>500+</h3>
            <p>Partner Companies</p>
          </div>

          <div className="hero-statbox">
            <h3>10k+</h3>
            <p>Success Stories</p>
          </div>
        </div>

        <p className="hero-footer">&copy;2024 InternMS</p>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-heading">Welcome Back</h1>

          <p className="login-text">Manage your career journey</p>

          <label className="login-mail">Email Address</label>

          <div className="email-box">
            <img src={MailIcon} className="mail-icon" />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="mail-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="password-top">
            <label className="login-pass">Password</label>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Forgot Password?
            </a>
          </div>

          <div className="password-box">
            <img src={lockIcon} className="lock-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="pass-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
              src={eyeIcon}
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <div className="checkbox">
            <input type="checkbox" />
            <p>Keep me signed in</p>
          </div>

          <button className="sign-in" type="submit">
            Sign In
            <img src={ArrowIcon} className="arrow-icon" />
          </button>

          <div className="line">
            <img src={Divider} className="divider" />
            <div className="text">OR CONTINUE WITH</div>
            <img src={Divider} className="divider" />
          </div>

          <div className="google">
            <button type="button" className="google-btn">
              <img src={GoogleIcon} className="Google-icon" />
              Google
            </button>

            <p className="createAcct">
              Don't have an account?
              <a href="/"> Create Account</a>
            </p>
          </div>

          <div className="footer-line">
            <a href="/">Help</a>
            <span className="dots"></span>
            <a href="/">Privacy</a>
            <span className="dots"></span>
            <a href="/">Terms</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
