import "../styles/process.css";

function Process() {
  return (
    <section className="process">

      <p className="small-title">HOW IT WORKS</p>

      <h2>Simple steps to successful internship management</h2>

      <div className="process-row">

        <div className="step">
          <div className="circle">1</div>
          <h3>Register Interns</h3>
          <p>Create intern profiles and allocate required information.</p>
        </div>

        <div className="step">
          <div className="circle">2</div>
          <h3>Assign Mentors</h3>
          <p>Assign suitable mentors and define internship goals.</p>
        </div>

        <div className="step">
          <div className="circle">3</div>
          <h3>Track Progress</h3>
          <p>Monitor tasks, attendance and performance regularly.</p>
        </div>

        <div className="step">
          <div className="circle">4</div>
          <h3>Evaluate & Generate</h3>
          <p>Evaluate performance and generate certificates.</p>
        </div>

      </div>

    </section>
  );
}

export default Process;