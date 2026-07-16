import { useState } from "react";
import { useNavigate } from "react-router-dom";
import admin from "../assets/register/admin.png";
import future from "../assets/register/future.png";
import adminverify from "../assets/register/shield.png";
import adminshield from "../assets/register/shield1.png";
import eyeOpen from "../assets/register/eye-icon.png";
import eyeClose from "../assets/register/closed-eye.png";
import "./AdminRegister.css";

function AdminRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization Name is required";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
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
      <div className="admin-page">
        <div className="admin-leftpage">
          <div className="admin-logo">
            <h3>InternMS</h3>
          </div>

          <div className="admin-heading">
            <h1>Regain access to your professional future.</h1>

            <p>
              Join thousands of companies and educational institutions managing
              the next generation of global talent through our secure,
              integrated ecosystem.
            </p>
          </div>

          <div className="admin-img">
            <img src={future} className="future-img" alt="future-img" />
          </div>

          <div className="admin-features">
            <div className="admin-card">
              <div className="admin-card-icon">
                <img
                  src={adminverify}
                  className="admin-verify"
                  alt="verify-icon"
                />
              </div>

              <div className="admin-content">
                <h4>Role-based access</h4>

                <p>Secure and personalized experience for every user.</p>
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-icon">
                <img
                  src={adminshield}
                  className="adminshield"
                  alt="adminshield-icon"
                />
              </div>

              <div className="admin-content">
                <h4>Trusted & Secure</h4>

                <p>Your data is protected with industry-standard security.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-rightpage">
          <div className="admin-header">
            <h1>Admin Registration</h1>

            <p>Fill in the details below to create your account</p>
          </div>

          <div className="admin-role">
            <p className="admin-title">Registering as</p>

            <div className="admin-container">
              <div className="admin-card">
                <div className="admin-circle">
                  <img src={admin} alt="admin-icon" />
                </div>
                <h4>Admin</h4>
              </div>
            </div>
          </div>

          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="admin-form-row">
              <div className="admin-group">
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

              <div className="admin-group">
                <label>
                  Email Address <span className="required">*</span>
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

            <div className="admin-form-row">
              <div className="admin-group">
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

              <div className="admin-group">
                <label>
                  Organization / Institution Name{" "}
                  <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="organization"
                  placeholder="Enter organization name"
                  value={formData.organization}
                  onChange={handleChange}
                />
                {errors.organization && (
                  <p className="error">{errors.organization}</p>
                )}
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-group">
                <label>
                  Job Title / Designation <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="designation"
                  placeholder="Enter your job title"
                  value={formData.designation}
                  onChange={handleChange}
                />
                {errors.designation && (
                  <p className="error">{errors.designation}</p>
                )}
              </div>

              <div className="admin-group">
                <label>
                  Country <span className="required">*</span>
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select your country</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Japan"> Japan </option>
                </select>
                {errors.country && <p className="error">{errors.country}</p>}
              </div>
            </div>

            <div className="admin-form-row">
              <div className="admin-password">
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
                  className="AdminEye"
                  alt="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="admin-password">
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
                  className="AdminEye"
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
                <span className="check-box">Terms of Service </span>
                and <span className="check-box">Privacy Policy</span>
              </label>
            </div>
            {errors.terms && <p className="error">{errors.terms}</p>}

            <button type="submit" className="admin-create">
              Create Account
            </button>

            <div className="admin-divline">
              <hr />
              <p>OR</p>
              <hr />
            </div>

            <div className="admin-sigin-line">
              <p>
                Already have an account?
                <span
                  className="admin-signin"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <footer className="admin-footer">
        <p>&copy; 2024 InternMS. All rights reserved.</p>

        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>
      </footer>
    </>
  );
}

export default AdminRegister;
