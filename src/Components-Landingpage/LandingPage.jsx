import "./LandingPage.css";
import HeroImg from "../assets/InternshipDashboard.png";
import SuccessIcon from "../assets/success.png";
import RightArrow from "../assets/right-arrow.png";
import NextGenIcon from "../assets/nextgen-icon.png";
import Automated from "../assets/automated.png";
import RealTime from "../assets/realtime.png";
import Secure from "../assets/secure.png";
import BlueArrow from "../assets/bluearrow.png";
import Office from "../assets/Office.png";
import Tick from "../assets/tick.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />

      <div className="Hero">
        <div className="HeroLeft">
          <div className="HeroBadge">
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

          <div className="HeroButtons">
            <button className="StartBtn">
              Get Started
              <img src={RightArrow} alt="Icon" />
            </button>

            <button className="DemoBtn">Book a Demo</button>
          </div>
        </div>

        <div className="HeroRight">
          <img src={HeroImg} className="HeroImage" alt="HeroImg" />

          <div className="FloatingCard">
            <img
              src={SuccessIcon}
              className="SuccessIconImg"
              alt="Success Icon"
            />

            <div className="CardText">
              <h5>Success Rate</h5>
              <h3>+24% Increase</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="Stats">
        <div className="StatBox">
          <h2>500+</h2>
          <p>UNIVERSITIES</p>
        </div>

        <div className="StatBox">
          <h2>10k+</h2>
          <p>GLOBAL COMPANIES</p>
        </div>

        <div className="StatBox">
          <h2>1M+</h2>
          <p>PLACEMENTS</p>
        </div>
      </div>
      <div className="Features">
        <div className="FeaturesTop">
          <div>
            <h2>Engineered for Efficiency</h2>
            <p>
              Complex placement workflows simplified into an intuitive,
              high-speed ecosystem designed for scale.
            </p>
          </div>

          <span>
            Explore all features
            <img src={BlueArrow} className="FeatureArrow" alt="Feature-arrow" />
          </span>
        </div>

        <div className="FeaturesGrid">
          <div className="FeatureCard">
            <div className="IconBox">
              <img src={Automated} alt="automated-icon" />
            </div>
            <h3>Automated Matching</h3>
            <p>
              Our AI-driven algorithm pairs candidates with their ideal roles
              based on skills, culture fit, and academic requirements.
            </p>
          </div>

          <div className="FeatureCard">
            <div className="IconBox">
              <img src={RealTime} alt="realtime-icon" />
            </div>
            <h3>Real-time Tracking</h3>
            <p>
              Monitor progress from application to final evaluation with
              granular dashboards for all stakeholders.
            </p>
          </div>

          <div className="FeatureCard">
            <div className="IconBox">
              <img src={Secure} alt="secure-icon" />
            </div>
            <h3>Secure Documents</h3>
            <p>
              Enterprise-grade encryption for contracts, NDAs, and compliance
              certifications with automated reminders.
            </p>
          </div>
        </div>
      </div>
      <div className="Audience">
        <div className="AudienceLeft">
          <h1>
            For Students: <br />
          </h1>
          <h2>Your Career Launchpad.</h2>

          <div className="AudiencePoints">
            <div className="Points">
              <span className="Tick">
                <img src={Tick} alt="tick-icon" />
              </span>
              <div>
                <h4>One-click Applications</h4>
                <p>
                  Apply to top-tier firms instantly with your verified profile.
                </p>
              </div>
            </div>

            <div className="Points">
              <span className="Tick">
                <img src={Tick} alt="tick-icon" />
              </span>
              <div>
                <h4>AI Career Coaching</h4>
                <p>
                  Personalized insights to help you stand out and land the role.
                </p>
              </div>
            </div>

            <div className="Points">
              <span className="Tick">
                <img src={Tick} alt="tick-icon" />
              </span>
              <div>
                <h4>Verified Credentials</h4>
                <p>A portable digital record of your internship success.</p>
              </div>
            </div>
          </div>

          <div className="AudienceButtons">
            <button>Students</button>
            <button>Employers</button>
            <button>Universities</button>
          </div>
        </div>

        <div className="AudienceRight">
          <img src={Office} className="AudienceImage" alt="office-icon" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
