import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Internship <br/>
          <span>Management</span><br/>
          <span>System</span>
        </h1>

        <p>
          Streamline Internship Programs from Registration to
          Placement. Manage interns, mentors, companies,
          reports and certificates.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Request Demo</button>
        </div>
      </div>

      <div className="hero-right">
        <img
            src="../src/assets/System Dashboard Preview.png"
          alt="dashboard"
        />
      </div>

    </section>
  );
}

export default Hero;