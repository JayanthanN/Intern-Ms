import "../styles/features.css";
import svgImg from "../assets/SVG.png";
import bgImg from "../assets/Background.png";
import vectorImg from "../assets/Vector (1).png";

function Features() {
  return (
    <section className="features">

       <p className="feature-tag">Key Features</p>

      <h2>Everything You Need to Manage Internships</h2>
      <p className="subtitle">
        Powerful tools designed for educational institutions and companies
      </p>

      <div className="feature-grid">

        <div className="feature-card">
        <div className="icon-box"> 
         <img src={svgImg} alt="SVG" className="feature-icon" />
        </div>
          <h3>Intern Management</h3>
          <ul>
            <li>Register and manage interns easily</li>
            <li>Track attendance and performance</li>
            <li>Generate reports and analytics</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={bgImg} alt="Background" className="feature-icon" />
          </div>
          <h3>Mentor Management</h3>
          <ul>
            <li>Assign mentors to interns</li>
            <li>Monitor the internship guidance process</li>
            <li>Receive mentor feedback and reports</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={vectorImg} alt="Vector" className="feature-icon" />
          </div>
          <h3>Company Portal</h3>
          <ul>
            <li>Post internship opportunities</li>
            <li>Evaluate and select candidates </li>
            <li>Communicate with interns and mentors</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Features;