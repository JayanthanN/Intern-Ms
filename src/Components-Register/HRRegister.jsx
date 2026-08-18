import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HRRegister.css";
import Group from "../assets/register/group.png";
import ProgressLine from "../assets/register/progressline.png";
import HRIcon from "../assets/register/HR-icon.png";
import MentorIcon from "../assets/register/mentor.png";
import InternIcon from "../assets/register/intern.png";
import CompanyIcon from "../assets/register/company.png";
import InternHub from "../assets/register/internhub.png";
import EyeOpen from "../assets/register/eye-icon.png";
import EyeClose from "../assets/register/closed-eye.png";

export const HRRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedRole, setSelectedRole] = useState("HR");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is Required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is Required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is Required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.department) {
      newErrors.department = "Department is Required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company Name is Required";
    }

    if (!formData.password) {
      newErrors.password = "Password is Required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain 8+ characters, uppercase, lowercase, number & special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is Required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!acceptedTerms) {
      newErrors.terms = "Please accept the Terms & Privacy Policy";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);
      navigate("/Intern-Ms/login");
    }
  };

  return (
    <div className="HRRegisterPage">
      <div className="HRLeftContainer">
        <h3 className="HRRegisterLogo">InternMS</h3>

        <div className="HRRegisterHeading">
          <h1>Empower your team with top-tier talent.</h1>

          <p className="HRRegisterText">
            Streamline your recruitment process, manage internships with ease,
            and connect with the next generation of industry leaders.
          </p>
        </div>

        <div className="HRDashboard">
          <div className="HRDashboardHeader">
            <div className="GroupIcon">
              <img src={Group} className="Group" alt="group-icon" />
            </div>

            <div className="HRDashboardContent">
              <h3>Unified Talent Dashboard</h3>

              <h5>Monitor all applications in real-time.</h5>
            </div>
          </div>

          <img src={ProgressLine} className="ProgressLine" alt="line-icon" />

          <div className="HRDashboardFooter">
            <p>75% Efficiency Boost</p>

            <p>120+ Placements</p>
          </div>
        </div>

        <div className="HRRegisterFooter">
          <div className="HRStats">
            <h3>500+</h3>
            <p>COMPANIES</p>
          </div>
          <div className="HRStats">
            <h3>10k+</h3>
            <p>STUDENTS</p>
          </div>
        </div>
      </div>
      <div className="HRRightContainer">
        <h1>Create your HR account</h1>

        <p>Join our ecosystem of professional employers.</p>

        <div className="RoleSelection">
          <p className="RoleTitle">Registering as</p>

          <div className="RoleContainer">
            <div
              className={`RoleCard ${selectedRole === "HR" ? "active" : ""}`}
              onClick={() => setSelectedRole("HR")}
            >
              <div className="IconCircle">
                <img src={HRIcon} alt="HR-icon" />
              </div>
              <h4>HR</h4>
            </div>

            <div
              className={`RoleCard ${
                selectedRole === "mentor" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRole("mentor");
                navigate("/Intern-Ms/mentor-register");
              }}
            >
              <div className="IconCircle">
                <img src={MentorIcon} alt="mentor-icon" />
              </div>
              <h4>Mentor</h4>
            </div>

            <div
              className={`RoleCard ${
                selectedRole === "intern" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRole("intern");
                navigate("/Intern-Ms/intern-register");
              }}
            >
              <div className="IconCircle">
                <img src={InternIcon} alt="intern-icon" />
              </div>
              <h4>Intern</h4>
            </div>

            <div
              className={`RoleCard ${
                selectedRole === "company" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRole("company");
                navigate("/Intern-Ms/company-register");
              }}
            >
              <div className="IconCircle">
                <img src={CompanyIcon} alt="company-icon" />
              </div>
              <h4>Company</h4>
            </div>
          </div>
        </div>

        <form className="HRRegisterForm" onSubmit={handleSubmit}>
          <div className="HRFormRow">
            <div className="HRInputGroup">
              <label>
                Full Name <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "HRErrorInput" : ""}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="HRInputGroup">
              <label>
                Work Email Address <span className="Required">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "HRErrorInput" : ""}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="HRFormRow">
            <div className="HRInputGroup">
              <label>
                Phone Number <span className="Required">*</span>
              </label>

              <div className="PhoneInput">
                <div className="CountryCode">
                  <h5>+91</h5>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className={errors.phone ? "HRErrorInput" : ""}
                />
              </div>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="HRInputGroup">
              <label>
                Department <span className="Required">*</span>
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={errors.department ? "HRErrorInput" : ""}
              >
                <option value="">Select department</option>
                <option value="HR">HR</option>
              </select>
              {errors.department && (
                <p className="error">{errors.department}</p>
              )}
            </div>
          </div>

          <div className="HRInputGroupFull">
            <label>
              Company Name<span className="Required">*</span>
            </label>

            <div
              className={`HRCompanyInput ${errors.company ? "HRCompanyError" : ""}`}
            >
              <img src={InternHub} className="InterHub" alt="interhub-icon" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="InternHub Inc."
                
              />
            </div>
            {errors.company && <p className="error">{errors.company}</p>}
          </div>
          <div className="HRFormRow">
            <div className="HRPasswordInput">
              <label>
                Password<span className="Required">*</span>
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className={errors.password ? "HRErrorInput" : ""}
              />

              <img
                src={showPassword ? EyeClose : EyeOpen}
                className="HREyeIcon"
                alt="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="HRPasswordInput">
              <label>
                Confirm Password <span className="Required">*</span>
              </label>

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? "HRErrorInput" : ""}
              />

              <img
                src={showConfirmPassword ? EyeClose : EyeOpen}
                className="HREyeIcon"
                alt="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="Terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className={errors.terms ? "HRErrorInput" : ""}
            />
            <label>
              I agree to the{" "}
              <span className="HRTermsLink">Terms of Service</span> and{" "}
              <span className="HRTermsLink">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          <button type="submit" className="HRCreateButton">
            Create Account
          </button>

          <div className="HRDivider">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="HRSigninSection">
            <p>
              Already have an account?
              <span onClick={() => navigate("/Intern-Ms/login")}>Sign in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
