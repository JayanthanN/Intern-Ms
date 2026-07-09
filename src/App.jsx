import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import Otp from "./pages/Otp";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotOtp from "./pages/ForgotOtp";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccess from "./pages/ResetSuccess";
import "./App.css"; 



function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/verification" element={<Verification/>}/>
      <Route path="/otp" element={<Otp/>}/>
      <Route path="/Forgot-password" element={<ForgotPassword/>}/>
      <Route path="/Forgot-otp" element={<ForgotOtp/>}/>
      <Route path="/Reset-password" element={<ResetPassword/>}/>
      <Route path="/Reset-success" element={<ResetSuccess/>}/>

     </Routes>
     </BrowserRouter>
      
   
  );
}

export default App;