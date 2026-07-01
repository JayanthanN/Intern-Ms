import "../styles/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <p className="testi-tag">TESTIMONIALS</p>

      <h2>What Our Users Say</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <p className="review">
            The Internship Management System has simplified our end-to-end
            internship process. Everything from task assignment to certificate generation is easy.
          </p>

          <div className="profile">

            <div className="avatar"></div>

            <div>
              <h3>Neha Patil</h3>
              <span>HR Manager, TechWorld Solutions</span>
            </div>

          </div>

        </div>

        <div className="testimonial-card">

          <p className="review">
            As a mentor, I can easily track my interns progress and provide
            meaningful feedback. The platform made mentoring organized.
          </p>

          <div className="profile">

            <div className="avatar"></div>

            <div>
              <h3>Rohit Sharma</h3>
              <span>Senior Engineer, Innovatech</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;