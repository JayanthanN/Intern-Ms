import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminRegister.css";
import AdminIcon from "../assets/register/admin.png";
import FutureImage from "../assets/register/future.png";
import AdminVerify from "../assets/register/shield.png";
import AdminShield from "../assets/register/shield1.png";
import EyeOpen from "../assets/register/eye-icon.png";
import EyeClose from "../assets/register/closed-eye.png";


export const AdminRegister = () => {
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

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization Name is Required";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is Required";
    }

    if (!formData.country) {
      newErrors.country = "Country is Required";
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
      navigate("/login");
    }
  };

  return (
    <>
      <div className="AdminRegisterPage">
        <div className="AdminLeftContainer">
          <div className="AdminRegisterLogo">
            <h3>InternMS</h3>
          </div>

          <div className="AdminRegisterHeading">
            <h1>Regain access to your professional future.</h1>

            <p>
              Join thousands of companies and educational institutions managing
              the next generation of global talent through our secure,
              integrated ecosystem.
            </p>
          </div>

          <div className="AdminImageBox">
            <img src={FutureImage} className="FutureImage" alt="future-img" />
          </div>

          <div className="AdminRegisterFeatures">
            <div className="AdminRegisterCard">
              <div className="AdminRegisterCardIcon">
                <img
                  src={AdminVerify}
                  className="AdminVerify"
                  alt="verify-icon"
                />
              </div>

              <div className="AdminRegisterContent">
                <h4>Role-based access</h4>

                <p>Secure and personalized experience for every user.</p>
              </div>
            </div>

            <div className="AdminRegisterCard">
              <div className="AdminRegisterCardIcon">
                <img
                  src={AdminShield}
                  className="AdminShield"
                  alt="adminshield-icon"
                />
              </div>

              <div className="AdminRegisterContent">
                <h4>Trusted & Secure</h4>

                <p>Your data is protected with industry-standard security.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="AdminRightContainer">
          <div className="AdminRegisterHeader">
            <h1>Admin Registration</h1>

            <p>Fill in the details below to create your account</p>
          </div>

          <div className="AdminRegisterRole">
            <p className="AdminRegisterTitle">Registering as</p>

            <div className="AdminRoleContainer">
              <div className="AdminRoleCard">
                <div className="AdminRoleIcon">
                  <img src={AdminIcon} alt="admin-icon" />
                </div>
                <h4>Admin</h4>
              </div>
            </div>
          </div>

          <form className="AdminRegisterForm" onSubmit={handleSubmit}>
            <div className="AdminRegisterFormRow">
              <div className="AdminRegisterGroup">
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

              <div className="AdminRegisterGroup">
                <label>
                  Email Address <span className="Required">*</span>
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

            <div className="AdminRegisterFormRow">
              <div className="AdminRegisterGroup">
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

              <div className="AdminRegisterGroup">
                <label>
                  Organization / Institution Name{" "}
                  <span className="Required">*</span>
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

            <div className="AdminRegisterFormRow">
              <div className="AdminRegisterGroup">
                <label>
                  Job Title / Designation <span className="Required">*</span>
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

              <div className="AdminRegisterGroup">
                <label>
                  Country <span className="Required">*</span>
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

            <div className="AdminRegisterFormRow">
              <div className="AdminPassword">
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
                  className="AdminEye"
                  alt="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="AdminPassword">
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
                  className="AdminEye"
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
                <span className="AdminTerms">Terms of Service </span>
                and <span className="AdminTerms">Privacy Policy</span>
              </label>
            </div>
            {errors.terms && <p className="error">{errors.terms}</p>}

            <button type="submit" className="AdminRegisterButton">
              Create Account
            </button>

            <div className="AdminRegisterDivider">
              <hr />
              <p>OR</p>
              <hr />
            </div>

            <div className="AdminRegisterSignin">
              <p>
                Already have an account?
                <span
                  className="AdminSigninLink"
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
      <footer className="AdminRegisterFooter">
        <p>&copy; 2024 InternMS. All rights reserved.</p>

        <div className="AdminFooterLinks">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>
      </footer>
    </>
  );
}


