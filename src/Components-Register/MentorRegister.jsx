import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HRicon from "../assets/register/HR-icon.png";
import mentor from "../assets/register/mentor.png";
import intern from "../assets/register/intern.png";
import company from "../assets/register/company.png";
import shield1 from "../assets/register/shield1.png";
import connection from "../assets/register/connection.png";
import growth from "../assets/register/growth.png";
import eyeicon from "../assets/register/eye-icon.png";
import office from "../assets/register/office.png";
import "./MentorRegister.css";

function MentorRegister() {
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

    if (!formData.title.trim()) {
      newErrors.title = "Professional Title is required";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Skills / Expertise is required";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    }

    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required";
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
    <div className="mentor-page">
      <div className="mentor-leftpage">
        <h3 className="intern-logo">InternMS</h3>

        <div className="mentor-heading">
          <h1>Empower the next generation of talent.</h1>

          <p className="mentor-text">
            Join a community of experts dedicated to guiding students through
            their career journey. Share your wisdom, foster growth, and shape
            the industry's future.
          </p>
        </div>

        <div className="mentor-dashboard">
          <div className="dashboard-item">
            <div className="dashboard-icon">
              <img src={shield1} className="shield1" alt="shield-icon" />
            </div>
            <div className="mentor-dashboard-content">
              <h4>Industry Impact</h4>

              <p>
                Bridge the gap between academic learning and real-world
                excellence.
              </p>
            </div>
          </div>

          <div className="dashboard-item">
            <div className="dashboard-icon">
              <img
                src={connection}
                className="connection"
                alt="connection-icon"
              />
            </div>
            <div className="mentor-dashboard-content">
              <h4>Meaningful Connections</h4>

              <p>
                Build lasting professional relationships with ambitious young
                minds.
              </p>
            </div>
          </div>

          <div className="dashboard-item">
            <div className="dashboard-icon">
              <img src={growth} className="growth" alt="growth-icon" />
            </div>
            <div className="mentor-dashboard-content">
              <h4>Personal Growth</h4>

              <p>
                Enhance your leadership and communication skills through
                mentorship.
              </p>
            </div>
          </div>
        </div>

        <img src={office} className="office-img" alt="office-icon" />
      </div>

      <div className="mentor-rightpage">
        <h1>Mentor Registration</h1>

        <p>Complete your profile to start connecting with students.</p>

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
              onClick={() => setSelectedRole("mentor")}
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

        <form className="mentor-form" onSubmit={handleSubmit}>
          <div className="mentor-form-row">
            <div className="mentor-group">
              <label>
                Full Name <span className="required">*</span>
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

            <div className="mentor-group">
              <label>
                Work Email Address <span className="required">*</span>
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

          <div className="mentor-form-row">
            <div className="mentor-group">
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
            <div className="mentor-group">
              <label>
                Professional Title <span className="required">*</span>
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
          <div className="mentor-form-row">
            <div className="mentor-group">
              <label>
                Skills / Expertise <span className="required">*</span>
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

            <div className="mentor-group">
              <label>
                Years of Experience<span className="required">*</span>
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
          <div className="mentor-group-full">
            <label>
              Bio / About You <span className="required">*</span>
            </label>

            <small className="bio-count">{formData.bio.length}/500</small>
            <textarea
              name="bio"
              placeholder="Tell us about yourself, your background and why you're passionate about 
mentoring..."
              value={formData.bio}
              onChange={handleChange}
              maxLength={200}
            />

            {errors.bio && <p className="error">{errors.bio}</p>}
          </div>

          <div className="mentor-form-row">
            <div className="mentor-password">
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
                src={eyeicon}
                className="eyes-icon"
                alt="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="mentor-password">
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
                src={eyeicon}
                className="eyes-icon"
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

          <div className="OR-line">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="signin-section-line">
            <p>
              Already have an account?
              <span onClick={() => navigate("/login")}> Sign in</span>
            </p>
          </div>
          

          <hr className="hr-line" />

          <div className="mentor-footer">
            <p>&copy; 2024 InternHub. All rights reserved.</p>

            <div className="mentor-footerlinks">
              <span>Support</span>

              <span>Contact Us</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MentorRegister;
