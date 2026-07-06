import "../styles/audience.css";
import studentImg from "../assets/Container (2).png";

function Audience() {
  return (
    <section className="audience">

      <div className="audience-left">
        <h1>
          For Students: <br />
        </h1>
          <h2>Your Career Launchpad.</h2>
        

        <div className="audience-points">

          <div className="point">
            <span>✓</span>
            <div>
              <h4>One-click Applications</h4>
              <p>
                Apply to top-tier firms instantly with your verified profile.
              </p>
            </div>
          </div>

          <div className="point">
            <span>✓</span>
            <div>
              <h4>AI Career Coaching</h4>
              <p>
                Personalized insights to help you stand out and land the role.
              </p>
            </div>
          </div>

          <div className="point">
            <span>✓</span>
            <div>
              <h4>Verified Credentials</h4>
              <p>
                A portable digital record of your internship success.
              </p>
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
            <img src={studentImg} alt="Students" className="audience-image"/>
          </div>
     

    </section>
  );
}

export default Audience;