import heroImg from "../assets/InternshipDashboard.png";
import successIcon from "../assets/success.png";
import rightarrow from "../assets/right-arrow.png";
import NextGenIcon from "../assets/nextgen-icon.png";
import automated from "../assets/automated.png";
import realtime from "../assets/realtime.png";
import secure from "../assets/secure.png";
import bluearrow from "../assets/bluearrow.png";
import office from "../assets/Office.png";
import tick from "../assets/tick.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="Landing-page">
      <Navbar />

      <div className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <img src={NextGenIcon} alt="Next-Generation Icon" />
            Next-Generation Placement OS
          </div>
          <h1>
            Seamless <br />
            Internships. <br />
          </h1>

          <h2>
            Smarter <br />
            Management.
          </h2>

          <hr />

          <p>
            Bridging the gap between ambitious talent and global opportunities.
            The definitive operating system for universities, students, and
            world-class employers.
          </p>

          <div className="hero-buttons">
            <button className="start-btn">
              Get Started
              <img src={rightarrow} alt="Icon" />
            </button>

            <button className="demo-btn">Book a Demo</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="HeroImg" className="hero-image" />

          <div className="floating-card">
            <img
              src={successIcon}
              alt="Success Icon"
              className="success-icon-img"
            />

            <div className="card-text">
              <h5>Success Rate</h5>
              <h3>+24% Increase</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>500+</h2>
          <p>UNIVERSITIES</p>
        </div>

        <div className="stat-box">
          <h2>10k+</h2>
          <p>GLOBAL COMPANIES</p>
        </div>

        <div className="stat-box">
          <h2>1M+</h2>
          <p>PLACEMENTS</p>
        </div>
      </div>
      <div className="features">
        <div className="features-top">
          <div>
            <h2>Engineered for Efficiency</h2>
            <p>
              Complex placement workflows simplified into an intuitive,
              high-speed ecosystem designed for scale.
            </p>
          </div>

          <span>
            Explore all features
            <img
              src={bluearrow}
              className="Feature-arrow"
              alt="Feature-arrow"
            />
          </span>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box">
              <img src={automated} alt="automated-icon" />
            </div>
            <h3>Automated Matching</h3>
            <p>
              Our AI-driven algorithm pairs candidates with their ideal roles
              based on skills, culture fit, and academic requirements.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <img src={realtime} alt="realtime-icon" />
            </div>
            <h3>Real-time Tracking</h3>
            <p>
              Monitor progress from application to final evaluation with
              granular dashboards for all stakeholders.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <img src={secure} alt="secure-icon" />
            </div>
            <h3>Secure Documents</h3>
            <p>
              Enterprise-grade encryption for contracts, NDAs, and compliance
              certifications with automated reminders.
            </p>
          </div>
        </div>
      </div>
      <div className="audience">
        <div className="audience-left">
          <h1>
            For Students: <br />
          </h1>
          <h2>Your Career Launchpad.</h2>

          <div className="audience-points">
            <div className="points">
              <span className="tick">
                <img src={tick} alt="tick-icon" />
              </span>
              <div>
                <h4>One-click Applications</h4>
                <p>
                  Apply to top-tier firms instantly with your verified profile.
                </p>
              </div>
            </div>

            <div className="points">
              <span className="tick">
                <img src={tick} alt="tick-icon" />
              </span>
              <div>
                <h4>AI Career Coaching</h4>
                <p>
                  Personalized insights to help you stand out and land the role.
                </p>
              </div>
            </div>

            <div className="points">
              <span className="tick">
                <img src={tick} alt="tick-icon" />
              </span>
              <div>
                <h4>Verified Credentials</h4>
                <p>A portable digital record of your internship success.</p>
              </div>
            </div>
          </div>

          <div className="audience-buttons">
            <button>Students</button>
            <button>Employers</button>
            <button>Universities</button>
          </div>
        </div>

        <div className="audience-right">
          <img src={office} alt="office-icon" className="audience-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
