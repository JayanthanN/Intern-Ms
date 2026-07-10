import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Components-Landingpage/LandingPage";
import Login from "./Components-Login/Login";
import Verification from "./Components-Login/Verification";
import Otp from "./Components-Login/Otp";
import ForgotPassword from "./Components-Login/ForgotPassword";
import ForgotOtp from "./Components-Login/ForgotOtp";
import ResetPassword from "./Components-Login/ResetPassword";
import ResetSuccess from "./Components-Login/ResetSuccess";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/Forgot-password" element={<ForgotPassword />} />
        <Route path="/Forgot-otp" element={<ForgotOtp />} />
        <Route path="/Reset-password" element={<ResetPassword />} />
        <Route path="/Reset-success" element={<ResetSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
