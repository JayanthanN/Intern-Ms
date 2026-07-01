import "../styles/users.css";

import icon1 from "../assets/Vector (2).png";
import icon2 from "../assets/Vector (3).png";
import icon3 from "../assets/Vector (4).png";
import icon4 from "../assets/Vector (5).png";
import icon5 from "../assets/Vector (6).png";

function Users() {
  return (
    <section className="users">

      <p className="small-title">PLATFORM USERS</p>

      <h2>Tailored experiences for everyone</h2>

      <div className="user-grid">

        <div className="user-card">
          <div className="icon-circle">
            <img src={icon1} alt="" />
          </div>
          <h3>Admin</h3>
        </div>

        <div className="user-card">
          <div className="icon-circle">
            <img src={icon2} alt="" />
          </div>
          <h3>HR / TPO</h3>
        </div>

        <div className="user-card">
          <div className="icon-circle">
            <img src={icon3} alt="" />
          </div>
          <h3>Mentor</h3>
        </div>

        <div className="user-card">
          <div className="icon-circle">
            <img src={icon4} alt="" />
          </div>
          <h3>Intern</h3>
        </div>

        <div className="user-card">
          <div className="icon-circle">
            <img src={icon5} alt="" />
          </div>
          <h3>Company</h3>
        </div>

      </div>

    </section>
  );
}

export default Users;