import "../styles/hero.css";
import heroImg from "../assets/InternshipDashboard.png";
import successIcon from "../assets/Background.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

       <div className="hero-badge">
          ✦ Next-Generation Placement OS
       </div>
        <h1>
          Seamless <br />
          Internships. <br />
          <span>Smarter Management.</span>
        </h1>

        <p>
          Bridging the gap between ambitious talent and global
          opportunities. The definitive operating system for
          universities, students and employers.
        </p>

        <div className="hero-buttons">
          <button className="start-btn">Get Started →</button>
          <button className="demo-btn">Book a Demo</button>
        </div>

      </div>

      <div className="hero-right">

      
        <img src={heroImg} alt="Hero" className="hero-image" />

      
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

    </section>
  );
}

export default Hero;