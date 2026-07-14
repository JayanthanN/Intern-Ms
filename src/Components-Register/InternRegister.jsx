import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HRicon from "../assets/register/HR-icon.png";
import mentor from "../assets/register/mentor.png";
import intern from "../assets/register/intern.png";
import company from "../assets/register/company.png";
import verified from "../assets/register/verified.png";
import track from "../assets/register/track.png";
import user from "../assets/register/user.png";
import Eyeicon from "../assets/register/eye-icon.png";
import "./InternRegister.css";
import { resume } from "react-dom/server";

function InternRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    college: "",
    fieldOfStudy: "",
    graduationYear: "",
    resume: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedRole, setSelectedRole] = useState("intern");

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

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College / University is required";
    }

    if (!formData.fieldOfStudy) {
      newErrors.fieldOfStudy = "Field of Study is required";
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = "Graduation Year is required";
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
    <div className="intern-page">
      <div className="intern-leftpage">
        <h3 className="intern-logo">InternMS</h3>

        <div className="intern-heading">
          <h1>Your gateway to professional excellence starts here.</h1>

          <p className="intern-text">
            Join thousands of ambitious students securing world-class
            internships at leading tech companies and creative agencies.
          </p>
        </div>

        <div className="intern-features">
          <div className="intern-card">
            <div className="intern-card-icon">
              <img src={verified} className="verified" alt="verified-icon" />
            </div>

            <div className="intern-content">
              <h4>Verified Employers</h4>

              <p>Connect with pre-vetted top-tier companies worldwide.</p>
            </div>
          </div>

          <div className="intern-card">
            <div className="intern-card-icon">
              <img src={track} className="track" alt="track-icon" />
            </div>

            <div className="intern-content">
              <h4>Smart Tracking</h4>

              <p>Manage all your applications in one organized dashboard.</p>
            </div>
          </div>

          <hr className="intern-hr" />

          <div className="intern-testimonial">
            <p className="intern-testimonial-text">
              "InternMS helped me land my dream internship at a Fortune 500
              company within 3 weeks of joining."
            </p>

            <div className="intern-user">
              <img src={user} className="user-icon" alt="user-icon" />

              <h5>— Sarah J., Product Design Intern</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="intern-rightpage">
        <h1>Intern Registration</h1>

        <p>Fill in the details below to create your professional account</p>

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
              onClick={() => setSelectedRole("intern")}
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

        <form className="intern-form" onSubmit={handleSubmit}>

          <div className="intern-form-row">
            <div className="intern-group">
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

            <div className="intern-group">
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

          <div className="intern-form-row">
            <div className="intern-group">
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

           <div className="intern-group">
              <label>
                Date of Birth <span className="required">*</span>
              </label>
                
                <input
                  type="date"
                  name="dob"
                  placeholder="Enter your dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
             
              {errors.dob && <p className="error">{errors.dob}</p>}
            
          </div>

          </div>




        </form>
      </div>
    </div>
  );
}

export default InternRegister;
