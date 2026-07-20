import { useState } from "react";
import { useNavigate } from "react-router-dom";
import group from "../assets/register/group.png";
import line from "../assets/register/progressline.png";
import HRicon from "../assets/register/HR-icon.png";
import mentor from "../assets/register/mentor.png";
import intern from "../assets/register/intern.png";
import company from "../assets/register/company.png";
import internhub from "../assets/register/internhub.png";
import eyeOpen from "../assets/register/eye-icon.png";
import eyeClose from "../assets/register/closed-eye.png";
import "./HRRegister.css";

function HRRegister() {
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
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain 8+ characters, uppercase, lowercase, number & special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
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
      alert("Account Created Successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="HR-page">
      <div className="hr-leftpage">
        <h3 className="inter-logo">InternMS</h3>

        <div className="hr-heading">
          <h1>Empower your team with top-tier talent.</h1>

          <p className="hr-text">
            Streamline your recruitment process, manage internships with ease,
            and connect with the next generation of industry leaders.
          </p>
        </div>

        <div className="hr-dashboard">
          <div className="hr-dashboard-header">
            <div className="group-icon">
              <img src={group} className="group" alt="group-icon" />
            </div>

            <div className="hr-dashboard-content">
              <h3>Unified Talent Dashboard</h3>

              <h5>Monitor all applications in real-time.</h5>
            </div>
          </div>

          <img src={line} className="line" alt="line-icon" />

          <div className="hr-dashboard-footer">
            <p>75% Efficiency Boost</p>

            <p>120+ Placements</p>
          </div>
        </div>

        <div className="hr-footer">
          <div className="hr-stat">
            <h3>500+</h3>
            <p>COMPANIES</p>
          </div>
          <div className="hr-stat">
            <h3>10k+</h3>
            <p>STUDENTS</p>
          </div>
        </div>
      </div>
      <div className="hr-rightpage">
        <h1>Create your HR account</h1>

        <p>Join our ecosystem of professional employers.</p>

        <div className="role-selection">
          <p className="role-title">Registering as</p>

          <div className="role-container">
            <div
              className={`role-card ${selectedRole === "HR" ? "active" : ""}`}
              onClick={() => setSelectedRole("HR")}
            >
              <div className="icon-circle">
                <img src={HRicon} alt="HR-icon" />
              </div>
              <h4>HR</h4>
            </div>

            <div
              className={`role-card ${
                selectedRole === "mentor" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRole("mentor");
                navigate("/mentor-register");
              }}
            >
              <div className="icon-circle">
                <img src={mentor} alt="mentor-icon" />
              </div>
              <h4>Mentor</h4>
            </div>

            <div
              className={`role-card ${
                selectedRole === "intern" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRole("intern");
                navigate("/intern-register");
              }}
            >
              <div className="icon-circle">
                <img src={intern} alt="intern-icon" />
              </div>
              <h4>Intern</h4>
            </div>

            <div
              className={`role-card ${
                selectedRole === "company" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRole("company");
                navigate("/company-register");
              }}
            >
              <div className="icon-circle">
                <img src={company} alt="company-icon" />
              </div>
              <h4>Company</h4>
            </div>
          </div>
        </div>

        <form className="hr-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="inputgroup">
              <label>
                Full Name <span className="required">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="inputgroup">
              <label>
                Work Email Address <span className="required">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="inputgroup">
              <label>
                Phone Number <span className="required">*</span>
              </label>

              <div className="phone-input">
                <div className="country-code">
                  <h5>+91</h5>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                />
              </div>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="inputgroup">
              <label>
                Department <span className="required">*</span>
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select department</option>
                <option value="HR">HR</option>
              </select>
              {errors.department && (
                <p className="error">{errors.department}</p>
              )}
            </div>
          </div>

          <div className="inputgroup-full">
            <label>
              Company Name<span className="required">*</span>
            </label>

            <div className="company-input">
              <img src={internhub} className="interhub" alt="interhub-icon" />
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
          <div className="form-row">
            <div className="password-input">
              <label>
                Password<span className="required">*</span>
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
              />

              <img
                src={showPassword ? eyeClose : eyeOpen}
                className="eye"
                alt="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="password-input">
              <label>
                Confirm Password <span className="required">*</span>
              </label>

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />

              <img
                src={showConfirmPassword ? eyeClose : eyeOpen}
                className="eye"
                alt="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label>
              I agree to the <span className="check-box">Terms of Service</span>{" "}
              and <span className="check-box">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          <button type="submit" className="create-btn">
            Create Account
          </button>

          <div className="OR-divider">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="signin-section">
            <p>
              Already have an account?
              <span onClick={() => navigate("/login")}>Sign in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HRRegister;
