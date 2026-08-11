import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LandingPage } from "./Components-Landingpage/LandingPage";
import { Login } from "./Components-Login/Login";
import { Verification } from "./Components-Login/Verification";
import { Otp } from "./Components-Login/Otp";
import { ForgotPassword } from "./Components-Login/ForgotPassword";
import { ForgotOtp } from "./Components-Login/ForgotOtp";
import { ResetPassword } from "./Components-Login/ResetPassword";
import { ResetSuccess } from "./Components-Login/ResetSuccess";

import { HRRegister } from "./Components-Register/HRRegister";
import { MentorRegister } from "./Components-Register/MentorRegister";
import { InternRegister } from "./Components-Register/InternRegister";
import { CompanyRegister } from "./Components-Register/CompanyRegister";
import { AdminRegister } from "./Components-Register/AdminRegister";

import { MentorDashboard } from "./Components-Dashboard/MentorDashboard";


const router = createBrowserRouter([
  {
    path: "/Intern-Ms",
    element: <LandingPage />,
  },
  {
    path: "/Intern-Ms/login",
    element: <Login />,
  },
  {
    path: "/Intern-Ms/verification",
    element: <Verification />,
  },
  {
    path: "/Intern-Ms/otp",
    element: <Otp />,
  },
  {
    path: "/Intern-Ms/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/Intern-Ms/forgot-otp",
    element: <ForgotOtp />,
  },
  {
    path: "/Intern-Ms/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/Intern-Ms/reset-success",
    element: <ResetSuccess />,
  },
  {
    path: "/Intern-Ms/hr-register",
    element: <HRRegister />,
  },
  {
    path: "/Intern-Ms/mentor-register",
    element: <MentorRegister />,
  },
  {
    path: "/Intern-Ms/intern-register",
    element: <InternRegister />,
  },
  {
    path: "/Intern-Ms/company-register",
    element: <CompanyRegister />,
  },
  {
    path: "/Intern-Ms/admin-register",
    element: <AdminRegister />,
  },
  {
    path: "/Intern-Ms/mentor-dashboard",
    element: <MentorDashboard />,
  },
 
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;