import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import "./App.css"; 


function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/verification" element={<Verification/>}/>
      
     </Routes>
     </BrowserRouter>
      
   
  );
}

export default App;