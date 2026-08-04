import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MentorRegister.css";
import HRIcon from "../assets/register/HR-icon.png";
import MentorIcon from "../assets/register/mentor.png";
import InternIcon from "../assets/register/intern.png";
import CompanyIcon from "../assets/register/company.png";
import MentorShield from "../assets/register/shield1.png";
import Connection from "../assets/register/connection.png";
import Growth from "../assets/register/growth.png";
import EyeOpen from "../assets/register/eye-icon.png";
import EyeClose from "../assets/register/closed-eye.png";
import Office from "../assets/register/office.png";


export const MentorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    skills: "",
    experience: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedRole, setSelectedRole] = useState("mentor");

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

    if (!formData.title.trim()) {
      newErrors.title = "Professional Title is Required";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Skills / Expertise is Required";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is Required";
    }

    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is Required";
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
    <div className="MentorRegisterPage">
      <div className="MentorLeftContainer">
        <h3 className="MentorRegisterLogo">InternMS</h3>

        <div className="MentorRegisterHeading">
          <h1>Empower the next generation of talent.</h1>

          <p className="MentorRegisterText">
            Join a community of experts dedicated to guiding students through
            their career journey. Share your wisdom, foster gRowth, and shape
            the industry's future.
          </p>
        </div>

        <div className="MentorRegisterDashboard">
          <div className="MentorRegisterDashboardItem">
            <div className="MentorRegisterDashboardIcon">
              <img src={MentorShield} className="MentorShield" alt="shield-icon" />
            </div>
            <div className="MentorRegisterDashboardContent">
              <h4>Industry Impact</h4>

              <p>
                Bridge the gap between academic learning and real-world
                excellence.
              </p>
            </div>
          </div>

          <div className="MentorRegisterDashboardItem">
            <div className="MentorRegisterDashboardIcon">
              <img
                src={Connection}
                className="Connection"
                alt="connection-icon"
              />
            </div>
            <div className="MentorRegisterDashboardContent">
              <h4>Meaningful Connections</h4>

              <p>
                Build lasting professional relationships with ambitious young
                minds.
              </p>
            </div>
          </div>

          <div className="MentorRegisterDashboardItem">
            <div className="MentorRegisterDashboardIcon">
              <img src={Growth} className="Growth" alt="growth-icon" />
            </div>
            <div className="MentorRegisterDashboardContent">
              <h4>Personal GRowth</h4>

              <p>
                Enhance your leadership and communication skills through
                mentorship.
              </p>
            </div>
          </div>
        </div>

        <img src={Office} className="OfficeImage" alt="office-icon" />
      </div>

      <div className="MentorRightContainer">
        <h1>Mentor Registration</h1>

        <p>Complete your profile to start connecting with students.</p>

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
              onClick={() => setSelectedRole("mentor")}
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

        <form className="MentorRegisterForm" onSubmit={handleSubmit}>
          <div className="MentorRegisterFormRow">
            <div className="MentorRegisterGroup">
              <label>
                Full Name <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="MentorRegisterGroup">
              <label>
                Work Email Address <span className="Required">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="MentorRegisterFormRow">
            <div className="MentorRegisterGroup">
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
            <div className="MentorRegisterGroup">
              <label>
                Professional Title <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="title"
                placeholder="e.g., Senior Software Engineer"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <p className="error">{errors.title}</p>}
            </div>
          </div>
          <div className="MentorRegisterFormRow">
            <div className="MentorRegisterGroup">
              <label>
                Skills / Expertise <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="skills"
                placeholder="e.g., UI/UX, React, Mentoring"
                value={formData.skills}
                onChange={handleChange}
              />
              {errors.skills && <p className="error">{errors.skills}</p>}
            </div>

            <div className="MentorRegisterGroup">
              <label>
                Years of Experience<span className="Required">*</span>
              </label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 Years</option>
                <option value="2-5">2-5 Years</option>
                <option value="5-10">5-10 Years</option>
              </select>
              {errors.experience && (
                <p className="error">{errors.experience}</p>
              )}
            </div>
          </div>
          <div className="MentorRegisterGroupFull">
            <label>
              Bio / About You <span className="Required">*</span>
            </label>

            <small className="MentorBioCount">{formData.bio.length}/500</small>
            <textarea
              name="bio"
              placeholder="Tell us about yourself, your background and why you're passionate about 
mentoring..."
              value={formData.bio}
              onChange={handleChange}
              maxLength={500}
            />

            {errors.bio && <p className="error">{errors.bio}</p>}
          </div>

          <div className="MentorRegisterFormRow">
            <div className="MentorPasswordInput">
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
                className="MentorEyeIcon"
                alt="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="MentorPasswordInput">
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
                className="MentorEyeIcon"
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
              I agree to the <span className="MentorTermsLink">Terms of Service</span>{" "}
              and <span className="MentorTermsLink">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          <button type="submit" className="MentorCreateButton">
            Create Account
          </button>

          <div className="MentorDivider">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="MentorSigninSection">
            <p>
              Already have an account?
              <span onClick={() => navigate("/Intern-Ms/login")}> Sign in</span>
            </p>
          </div>

          <hr className="MentorFooterDivider" />

          <div className="MentorFooter">
            <p>&copy; 2024 InternHub. All rights reserved.</p>

            <div className="MentorFooterLinks">
              <span>Support</span>

              <span>Contact Us</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


