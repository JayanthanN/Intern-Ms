import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <div className="Logo">InternMS</div>

      <div className="NavButtons">
        <button onClick={() => navigate("/login")} className="LoginButton">
          Login
        </button>

        <button
          onClick={() => navigate("/HR-Register")}
          className="RegisterButton"
        >
          Register
        </button>
      </div>
    </nav>
  )
}
