import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <div className="Logo">InternMS</div>

      <div className="NavButtons">
        <button onClick={() => navigate("/Intern-Ms/login")} className="LoginButton">
          Login
        </button>

        <button
          onClick={() => navigate("/Intern-Ms/hr-register")}
          className="RegisterButton"
        >
          Register
        </button>
      </div>
    </nav>
  )
}
