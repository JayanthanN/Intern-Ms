import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InternRegister.css";
import HRIcon from "../assets/register/HR-icon.png";
import MentorIcon from "../assets/register/mentor.png";
import InternIcon from "../assets/register/intern.png";
import CompanyIcon from "../assets/register/company.png";
import Verified from "../assets/register/verified.png";
import Track from "../assets/register/track.png";
import User from "../assets/register/user.png";
import Upload from "../assets/register/upload.png";
import EyeOpen from "../assets/register/eye-icon.png";
import EyeClose from "../assets/register/closed-eye.png";

export const InternRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    college: "",
    fieldOfStudy: "",
    graduationYear: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedRole, setSelectedRole] = useState("intern");
  const [resume, setResume] = useState(null);

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

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is Required";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College / University is Required";
    }

    if (!formData.fieldOfStudy) {
      newErrors.fieldOfStudy = "Field of Study is Required";
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = "Graduation Year is Required";
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
    <div className="InternRegisterPage">
      <div className="InternLeftContainer">
        <h3 className="InternRegisterLogo">InternMS</h3>

        <div className="InternRegisterHeading">
          <h1>Your gateway to professional excellence starts here.</h1>

          <p className="InternText">
            Join thousands of ambitious students securing world-class
            internships at leading tech companies and creative agencies.
          </p>
        </div>

        <div className="InternFeatures">
          <div className="InternCard">
            <div className="InternCardIcon">
              <img src={Verified} className="Verified" alt="verified-icon" />
            </div>

            <div className="InternContent">
              <h4>Verified Employers</h4>

              <p>Connect with pre-vetted top-tier companies worldwide.</p>
            </div>
          </div>

          <div className="InternCard">
            <div className="InternCardIcon">
              <img src={Track} className="Track" alt="track-icon" />
            </div>

            <div className="InternContent">
              <h4>Smart Tracking</h4>

              <p className="Smart">
                Manage all your applications in one organized dashboard.
              </p>
            </div>
          </div>

          <hr className="InternRegisterHr" />

          <div className="InternTestimonial">
            <p className="InternTestimonialText">
              "InternMS helped me land my dream internship at a Fortune 500
              company within 3 weeks of joining."
            </p>

            <div className="InternUser">
              <img src={User} className="UserIcon" alt="user-icon" />

              <h5>— Sarah J., Product Design Intern</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="InternRightContainer">
        <h1>Intern Registration</h1>

        <p>Fill in the details below to create your professional account</p>

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
              onClick={() => setSelectedRole("intern")}
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

        <form className="InternRegisterForm" onSubmit={handleSubmit}>
          <div className="InternRegisterFormRow">
            <div className="InternRegisterGroup">
              <label>
                Full Name <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "InternErrorInput" : ""}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="InternRegisterGroup">
              <label>
                Work Email Address <span className="Required">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "InternErrorInput" : ""}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="InternRegisterFormRow">
            <div className="InternRegisterGroup">
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
                  className={errors.phone ? "InternErrorInput" : ""}
                />
              </div>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="InternRegisterGroup">
              <label>
                Date of Birth <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="dob"
                placeholder="mm/dd/yyyy"
                value={formData.dob}
                onChange={handleChange}
                className={errors.dob ? "InternErrorInput" : ""}
              />

              {errors.dob && <p className="error">{errors.dob}</p>}
            </div>
          </div>

          <div className="InternRegisterFormRow">
            <div className="InternRegisterGroup">
              <label>
                College / University <span className="Required">*</span>
              </label>

              <input
                type="text"
                name="college"
                placeholder="Enter your university name"
                value={formData.college}
                onChange={handleChange}
                className={errors.college ? "InternErrorInput" : ""}
              />
              {errors.college && <p className="error">{errors.college}</p>}
            </div>

            <div className="InternRegisterGroup">
              <label>
                Field of Study <span className="Required">*</span>
              </label>

              <select
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className={errors.fieldOfStudy ? "InternErrorInput" : ""}
              >
                <option value="">Select your field of study</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">
                  Information Technology
                </option>
              </select>
              {errors.fieldOfStudy && (
                <p className="error">{errors.fieldOfStudy}</p>
              )}
            </div>
          </div>

          <div className="InternRegisterFormRow">
            <div className="InternRegisterGroup">
              <label>
                Graduation Year <span className="Required">*</span>
              </label>

              <select
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                className={errors.graduationYear ? "InternErrorInput" : ""}
              >
                <option value="">Select your graduation year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              {errors.graduationYear && (
                <p className="error">{errors.graduationYear}</p>
              )}
            </div>

            <div className="InternRegisterGroup">
              <label>Resume (Optional)</label>
              <label className="UploadBox">
                <img src={Upload} alt="upload-icon" />
                <span>
                  {resume ? resume.name : "Upload PDF, DOCX (Max 5MB)"}
                </span>

                <input
                  type="file"
                  accept="pdf,doc,docx"
                  hidden
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          <div className="InternRegisterFormRow">
            <div className="InternPasswordInput">
              <label>
                Password<span className="Required">*</span>
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className={errors.password ? "InternErrorInput" : ""}
              />

              <img
                src={showPassword ? EyeClose : EyeOpen}
                className="InternEyeIcon"
                alt="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="InternPasswordInput">
              <label>
                Confirm Password <span className="Required">*</span>
              </label>

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? "InternErrorInput" : ""}
              />

              <img
                src={showConfirmPassword ? EyeClose : EyeOpen}
                className="InternEyeIcon"
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
              className={errors.terms ? "InternErrorInput" : ""}
            />
            <label>
              I agree to the{" "}
              <span className="InternTerms">Terms of Service</span> and{" "}
              <span className="InternTerms">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          <button type="submit" className="InternCreateButton">
            Create Account
          </button>

          <div className="InternDivider">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="InternSigninSection">
            <p>
              Already have an account?
              <span onClick={() => navigate("/Intern-Ms/login")}> Sign in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
