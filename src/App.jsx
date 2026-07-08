import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import Otp from "./pages/Otp";
import ForgotPassword from "./pages/ForgotPassword";
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
      
     </Routes>
     </BrowserRouter>
      
   
  );
}

export default App;