import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Components-Landingpage/LandingPage";
import Login from "./Components-Login/Login";
import Verification from "./Components-Login/Verification";
import Otp from "./Components-Login/Otp";
import ForgotPassword from "./Components-Login/ForgotPassword";
import ForgotOtp from "./Components-Login/ForgotOtp";
import ResetPassword from "./Components-Login/ResetPassword";
import ResetSuccess from "./Components-Login/ResetSuccess";
import HRRegister from "./Components-Register/HRRegister";
import MentorRegister from "./Components-Register/MentorRegister";
import InternRegister from "./Components-Register/InternRegister";
import CompanyRegister from "./Components-Register/CompanyRegister";
import AdminRegister from "./Components-Register/AdminRegister";
import MentorDashboard from "./Components-Dashboard/MentorDashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Intern-Ms">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-otp" element={<ForgotOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-success" element={<ResetSuccess />} />

        <Route path="/hr-register" element={<HRRegister/>}/>
        <Route path="/mentor-register" element={<MentorRegister/>}/>
        <Route path="/intern-register" element={<InternRegister/>}/>
        <Route path="/company-register" element={<CompanyRegister/>}/>
        <Route path="/admin-register" element={<AdminRegister/>}/>
        <Route path="/mentor-dashboard" element={<MentorDashboard/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
