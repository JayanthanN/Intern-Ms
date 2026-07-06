import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const navigate=useNavigate();

  return (
    <nav className="navbar">

      <div className="logo">InternMS</div>

      <div className="nav-buttons">
        <button onClick={()=>navigate("/login")} className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

    </nav>
  );
}

export default Navbar;