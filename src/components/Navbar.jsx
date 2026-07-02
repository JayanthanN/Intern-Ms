import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">InternMS</div>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

    </nav>
  );
}

export default Navbar;