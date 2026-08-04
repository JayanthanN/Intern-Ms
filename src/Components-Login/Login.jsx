import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import MailIcon from "../assets/Login/mail-icon.png";
import LockIcon from "../assets/Login/lock-icon.png";
import EyeOpen from "../assets/Login/eye-icon.png";
import EyeClose from "../assets/eye-close.png";
import ArrowIcon from "../assets/Login/arrow.png";
import GoogleIcon from "../assets/Login/Google-icon.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
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

      navigate("/Intern-Ms/verification");
    }
  };
  return (
    <div className="LoginPage">
      <div className="HeroContainer">
        <h2 className="HeroLogo">InternHub</h2>

        <h2 className="HeroHeading">Your next big leap starts here.</h2>

        <p className="HeroText">
          Connect with industry leaders, manage your applications, and
          accelerate your career path with our comprehensive internship
          management platform.
        </p>

        <div className="HeroStats">
          <div className="HeroStatBox">
            <h3>500+</h3>
            <p>PARTNER COMPANIES</p>
          </div>

          <div className="HeroStatBox">
            <h3>10k+</h3>
            <p>SUCCESS STORIES</p>
          </div>
        </div>

        <p className="HeroFooter">&copy;2024 InternMS</p>
      </div>

      <div className="LoginContainer">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <h1 className="LoginHeading">Welcome Back</h1>

          <p className="LoginText">Manage your career journey.</p>

          <label className="LoginMail">Email Address</label>

          <div className="EmailBox">
            <img src={MailIcon} className="MailIcon" alt="mail-icon" />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="MailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="Error">{errors.email}</p>}

          <div className="PasswordTop">
            <label className="LoginPass">Password</label>

            <span
              onClick={(e) => {
                e.preventDefault();
                navigate("/Intern-Ms/forgot-password");
              }}
            >
              Forgot Password?
            </span>
          </div>

          <div className="PasswordBox">
            <img src={LockIcon} className="LockIcon" alt="lock-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="PassInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
              src={showPassword ? EyeClose : EyeOpen}
              className="EyeIcon"
              alt="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <p className="Error">{errors.password}</p>}

          <div className="CheckBox">
            <input type="checkbox" />
            <p>Keep me signed in</p>
          </div>

          <button className="SignInButton" type="submit">
            Sign In
            <img src={ArrowIcon} className="ArrowIcon" alt="arrow-icon" />
          </button>

          <div className="LoginDivider">
            <hr />
            <p>OR CONTINUE WITH</p>
            <hr />
          </div>

          <div className="GoogleSection">
            <button type="button" className="GoogleBtn">
              <img src={GoogleIcon} className="GoogleIcon" alt="google-icon" />
              Google
            </button>

            <p className="CreateAcct">
              Don't have an account?
              <span onClick={() => navigate("/Intern-Ms/hr-register")}>
                Create Account
              </span>
            </p>
          </div>

          <footer className="FooterLine">
            <p>Help</p>
            <span className="Dots"></span>
            <p>Privacy</p>
            <span className="Dots"></span>
            <p>Terms</p>
          </footer>
        </form>
      </div>
    </div>
  )
}
