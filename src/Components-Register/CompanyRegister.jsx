import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HRicon from "../assets/register/HR-icon.png";
import mentor from "../assets/register/mentor.png";
import intern from "../assets/register/intern.png";
import company from "../assets/register/company.png";
import hire from "../assets/register/job-hire.png";
import vshield from "../assets/register/shield1.png";
import handshake from "../assets/register/handshake.png";
import privacy from "../assets/register/eye-icon.png";
import share from "../assets/register/share.png";
import link from "../assets/register/Link.png";
import mention from "../assets/register/email-icon.png";
import "./CompanyRegister.css";

function CompanyRegister() {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "",
    registrationNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedRole, setSelectedRole] = useState("company");

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
    const websiteRegex = /^https?:\/\/.+/;

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Company Website is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Work Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.industry) {
      newErrors.industry = "Industry is required";
    }

    if (!formData.companySize) {
      newErrors.companySize = "Company Size is required";
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Registration Number is required";
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
    <>
      <div className="company-page">
        <div className=" company-leftpage">
          <div className="company-heading">
            <h1>Partner with InternMS to scale your team.</h1>

            <p className="company-text">
              Connect with over 100,000+ top-tier students and graduates ready
              to bring innovation to your company.
            </p>
          </div>

          <div className="company-features">
            <div className="company-card">
              <div className="company-card-icon">
                <img src={hire} className="hire" alt="hire-icon" />
              </div>

              <div className="company-content">
                <h4>Effortless Hiring</h4>

                <p>
                  Post jobs and manage applicants in one centralized dashboard.
                </p>
              </div>
            </div>

            <div className="company-card">
              <div className="company-card-icon">
                <img src={vshield} className="vshield" alt="vshield-icon" />
              </div>

              <div className="company-content">
                <h4>Verified Talent</h4>

                <p>
                  Every student profile is verified for education and skill
                  credentials.
                </p>
              </div>
            </div>
          </div>

          <div className="handshake-bg">
            <img src={handshake} className="handshake" alt="handshake-icon" />
          </div>
        </div>

        <div className="company-rightpage">
          <div className="company-header">
            <h1>Create Company Account</h1>

            <p>
              Fill in the details to register your organization and start
              hiring.
            </p>
          </div>

          <div className="role-selection">
            <p className="role-title">Registering as</p>

            <div className="role-container">
              <div
                className={`role-card ${selectedRole === "HR" ? "active" : ""}`}
                onClick={() => {
                  setSelectedRole("HR");
                  navigate("/hr-register");
                }}
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
                onClick={() => setSelectedRole("company")}
              >
                <div className="icon-circle">
                  <img src={company} alt="company-icon" />
                </div>
                <h4>Company</h4>
              </div>
            </div>
          </div>

          <form className="company-form" onSubmit={handleSubmit}>
            <div className="company-form-row">
              <div className="company-group">
                <label>
                  Company Name <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="e.g. Acme Corp"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <p className="error">{errors.companyName}</p>
                )}
              </div>

              <div className="company-group">
                <label>
                  Company Website <span className="required">*</span>
                </label>

                <input
                  type="url"
                  name="website"
                  placeholder="https://"
                  value={formData.website}
                  onChange={handleChange}
                />
                {errors.website && <p className="error">{errors.website}</p>}
              </div>
            </div>

            <div className="company-form-row">
              <div className="company-group">
                <label>
                  Work Email <span className="required">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="company-group">
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
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>

            <div className="company-form-row">
              <div className="company-group">
                <label>
                  Industry <span className="required">*</span>
                </label>

                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">Select industry</option>
                  <option value="IT">IT</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
                {errors.industry && <p className="error">{errors.industry}</p>}
              </div>

              <div className="company-group">
                <label>
                  Company Size <span className="required">*</span>
                </label>

                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                </select>
                {errors.companySize && (
                  <p className="error">{errors.companySize}</p>
                )}
              </div>
            </div>

            <div className="company-full">
              <label>
                Registration Number <span className="required">*</span>
              </label>

              <div className="company-input">
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Business ID or Tax ID"
                />
              </div>
              {errors.registrationNumber && (
                <p className="error">{errors.registrationNumber}</p>
              )}
            </div>
            <div className="company-form-row">
              <div className="company-password">
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
                  src={privacy}
                  className="privacy-icon"
                  alt="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="company-password">
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
                  src={privacy}
                  className="privacy-icon"
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
                I agree to the{" "}
                <span className="check-box">Terms of Service</span> and{" "}
                <span className="check-box">Privacy Policy</span>
              </label>
            </div>
            {errors.terms && <p className="error">{errors.terms}</p>}

            <button type="submit" className="company-register">
              Register Company
            </button>

            <div className="company-divline">
              <hr />
              <p>OR</p>
              <hr />
            </div>

            <div className="signin-company">
              <p>
                Already have an account?
                <span onClick={() => navigate("/login")}> Sign in</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="company-footer">
        <div className="company-footer-top">
          <h4>InternMS</h4>
          <div className="company-footer-links">
            <span>Find Talent</span>
            <span>Internships</span>
            <span>Pricing</span>
            <h4>Log In</h4>
          </div>
        </div>
        <hr />
        <div className="company-footer-bottom">
          <div>
            <h5>InternMS</h5>
            <p>
              Connecting the next generation of talent with world-class
              opportunities.
            </p>
          </div>
          <div>
            <h5>Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div>
            <h5>For Employers</h5>
            <p>Post a Job</p>
            <p>Hiring Solutions</p>
            <p>Pricing</p>
          </div>
          <div>
            <h5>Support</h5>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Privacy</p>
          </div>
        </div>
        <hr />
        <div className="company-copyright">
          <p>&copy; 2024 InternMS. All rights reserved.</p>
        </div>
        <div className="company-links">
          <img src={link} className="company-link" alt="company-link" />

          <img src={mention} className="mention" alt="mention-icon" />

          <img src={share} className="share" alt="share-icon" />
        </div>
      </div>
    </>
  );
}

export default CompanyRegister;
