import "../styles/features.css";
import icon1 from "../assets/Overlay (1).png";
import icon2 from "../assets/Overlay.png";
import icon3 from "../assets/Overlay (2).png";
import featureImg from "../assets/Icon (2).png";

function Features() {
  return (
    <section className="features">

      <div className="features-top">
        <div>
          <h2>Engineered for Efficiency</h2>
          <p>
            Complex placement workflows simplified into an intuitive,
            high-speed ecosystem designed for scale.
          </p>
        </div>

        <a href="/">Explore all features <img src={featureImg} alt="Feature Icon" /> </a>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <div className="icon-box">
            <img src={icon1} alt="icon" />
          </div>
          <h3>Automated Matching</h3>
          <p>
            Our AI-driven algorithm pairs candidates with their ideal roles based on skills, culture fit, and academic requirements.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={icon2} alt="icon" />
          </div>
          <h3>Real-time Tracking</h3>
          <p>
            Monitor progress from application to final evaluation with granular dashboards for all stakeholders.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={icon3} alt="icon" />
          </div>
          <h3>Secure Documents</h3>
          <p>
            Enterprise-grade encryption for contracts, NDAs, and compliance certifications with automated reminders.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;