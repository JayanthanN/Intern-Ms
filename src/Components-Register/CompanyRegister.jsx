import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyRegister.css";
import HRIcon from "../assets/register/HR-icon.png";
import MentorIcon from "../assets/register/mentor.png";
import InternIcon from "../assets/register/intern.png";
import CompanyIcon from "../assets/register/company.png";
import Hire from "../assets/register/job-hire.png";
import Vshield from "../assets/register/shield1.png";
import Handshake from "../assets/register/handshake.png";
import EyeOpen from "../assets/register/eye-icon.png";
import EyeClose from "../assets/register/closed-eye.png";
import Share from "../assets/register/share.png";
import Link from "../assets/register/Link.png";
import Mention from "../assets/register/email-icon.png";


export const CompanyRegister = () => {
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
      newErrors.companyName = "Company Name is Required";
    }

    if (!formData.website.trim()) {
  newErrors.website = "Company Website is Required";
} else if (!websiteRegex.test(formData.website)) {
  newErrors.website = "Enter a valid website URL";
}

    if (!formData.email.trim()) {
      newErrors.email = "Work Email is Required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is Required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.industry) {
      newErrors.industry = "Industry is Required";
    }

    if (!formData.companySize) {
      newErrors.companySize = "Company Size is Required";
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Registration Number is Required";
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
      alert("Account Created Successfully!");
      navigate("/Intern-Ms/login");
    }
  };

  return (
    <>
      <div className="CompanyRegisterPage">
        <div className="CompanyLeftContainer">
          <div className="CompanyHeading">
            <h1>Partner with InternMS to scale your team.</h1>

            <p className="CompanyText">
              Connect with over 100,000+ top-tier students and graduates ready
              to bring innovation to your company.
            </p>
          </div>

          <div className="CompanyFeatures">
            <div className="CompanyFeatureCard">
              <div className="CompanyFeatureCardIcon">
                <img src={Hire} className="HireIcon" alt="hire-icon" />
              </div>

              <div className="CompanyContent">
                <h4>Effortless Hiring</h4>

                <p>
                  Post jobs and manage applicants in one centralized dashboard.
                </p>
              </div>
            </div>

            <div className="CompanyFeatureCard">
              <div className="CompanyFeatureCardIcon">
                <img src={Vshield} className="VerifiedShieldIcon" alt="vshield-icon" />
              </div>

              <div className="CompanyContent">
                <h4>Verified Talent</h4>

                <p>
                  Every student profile is verified for education and skill
                  credentials.
                </p>
              </div>
            </div>
          </div>

          <div className="HandshakeContainer">
            <img src={Handshake} className="HandshakeImage" alt="handshake-icon" />
          </div>
        </div>

        <div className="CompanyRightContainer">
          <div className="CompanyHeader">
            <h1>Create Company Account</h1>

            <p>
              Fill in the details to register your organization and start
              hiring.
            </p>
          </div>

          <div className="RoleSelection">
            <p className="RoleTitle">Registering as</p>

            <div className="RoleContainer">
              <div
                className={`RoleCard ${selectedRole === "HR" ? "active" : ""}`}
                onClick={() => {
                  setSelectedRole("HR");
                  navigate("/Intern-Ms/hr-register");
                }}
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
                onClick={() => setSelectedRole("company")}
              >
                <div className="IconCircle">
                  <img src={CompanyIcon} alt="company-icon" />
                </div>
                <h4>Company</h4>
              </div>
            </div>
          </div>

          <form className="CompanyRegisterForm" onSubmit={handleSubmit}>
            <div className="CompanyRegisterFormRow">
              <div className="CompanyRegisterGroup">
                <label>
                  Company Name <span className="Required">*</span>
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

              <div className="CompanyRegisterGroup">
                <label>
                  Company Website <span className="Required">*</span>
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

            <div className="CompanyRegisterFormRow">
              <div className="CompanyRegisterGroup">
                <label>
                  Work Email <span className="Required">*</span>
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

              <div className="CompanyRegisterGroup">
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
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>

            <div className="CompanyRegisterFormRow">
              <div className="CompanyRegisterGroup">
                <label>
                  Industry <span className="Required">*</span>
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

              <div className="CompanyRegisterGroup">
                <label>
                  Company Size <span className="Required">*</span>
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

            <div className="CompanyRegisterGroupFull">
              <label>
                Registration Number <span className="Required">*</span>
              </label>

              
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Business ID or Tax ID"
                />
              
              {errors.registrationNumber && (
                <p className="error">{errors.registrationNumber}</p>
              )}
            </div>
            <div className="CompanyRegisterFormRow">
              <div className="CompanyPasswordInput">
                <label>
                  Password<span className="Required">*</span>
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                />

                <img
                  src={showPassword ? EyeClose : EyeOpen}
                  className="CompanyEyeIcon"
                  alt="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="CompanyPasswordInput">
                <label>
                  Confirm Password <span className="Required">*</span>
                </label>

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />

                <img
                  src={showConfirmPassword ? EyeClose : EyeOpen}
                  className="CompanyEyeIcon"
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
              />
              <label>
                I agree to the{" "}
                <span className="CompanyTermsLink">Terms of Service</span> and{" "}
                <span className="CompanyTermsLink">Privacy Policy</span>
              </label>
            </div>
            {errors.terms && <p className="error">{errors.terms}</p>}

            <button type="submit" className="CompanyRegisterButton">
              Register Company
            </button>

            <div className="CompanyDivider">
              <hr />
              <p>OR</p>
              <hr />
            </div>

            <div className="CompanySigninSection">
              <p>
                Already have an account?
                <span onClick={() => navigate("/Intern-Ms/login")}> Sign in</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <footer className="CompanyFooter">
        <div className="CompanyFooterTop">
          <div className="CompanyFooterLogo">
            <h4>InternMS</h4>
          </div>

          <div className="CompanyFooterLinks">
            <span>Find Talent</span>
            <span>Internships</span>
            <span>Pricing</span>
          </div>
          <div className="CompanyFooterLogin">
            <h4 onClick={() => navigate("/Intern-Ms/admin-register")}> Log In </h4>
          </div>
        </div>
        <div className="CompanyFooterContainer">
          <div className="CompanyFooterBottom">
            <div className="CompanyFooterText">
              <h5>InternMS</h5>
              <p>
                Connecting the next generation of talent with world-class
                opportunities. Build your future with InternHub.
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

          <div className="CompanyCopyright">
            <p>&copy; 2024 InternMS. All rights reserved.</p>

            <div className="CompanySocialLinks">
              <img src={Link} className="CompanyLinkIcon" alt="company-link" />

              <img src={Mention} className="MentionIcon" alt="mention-icon" />

              <img src={Share} className="ShareIcon" alt="share-icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


