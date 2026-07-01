import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">InternMS</div>

      <ul className="nav-links">
        <li>Find Internships</li>
        <li>For Employers</li>
        <li>Help</li>
      </ul>

      <div className="nav-buttons">
        <span className="login">Login</span>
        <button>Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;