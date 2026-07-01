import "../styles/dashboard.css";
import dashboardImg from "../assets/Insights Dashboard.png";

function Dashboard() {
  return (
    <section className="dashboard">

      <div className="dashboard-left">
        <img src={DashboardImg} alt="dashboard" />
      </div>

      <div className="dashboard-right">

        <p className="dashboard-tag">REAL TIME INSIGHTS</p>

        <h2>Powerful Dashboard for Better Decisions</h2>

        <p>
          Get real-time insights into internship programs, performance,
          and outcomes with easy-to-understand analytics and reports.
        </p>

        <button>Explore Dashboard</button>

      </div>

    </section>
  );
}

export default Dashboard;