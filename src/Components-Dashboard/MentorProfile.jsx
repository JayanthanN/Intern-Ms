import "./MentorProfile.css";
import MentorProfileImage from "../assets/dashboard/mentorimage.png";
import MentorProfileRole from "../assets/dashboard/mentorrole.png";

export const MentorProfile = () => {
  return (
    <div className="MentorProfilePage">
      <div className="MentorProfileCard">
        <div className="MentorProfileImageContainer">
          <img
            src={MentorProfileImage}
            className="MentorProfileImage"
            alt="Mentor Profile"
          />
        </div>

        <h2>Alex Chen</h2>

        <p className="MentorProfileRole">Software Engineering Lead</p>

        <div className="MentorProfileStats">
          <div className="MentorProfileStat">
            <h4>MENTORED</h4>
            <span>48</span>
            <p>Students total</p>
          </div>
          <div className="MentorProfileStat">
            <h4>RATING</h4>
            <span>4.9</span>
            <p>120+ reviews</p>
          </div>
        </div>

        <button className="MentorProfileButton">Set Availability</button>
      </div>

      <div className="MentorProfileRoleCard">
        <h3>CURRENT ROLE</h3>

        <div className="MentorProfileRoleContent">
          <div className="MentorProfileRoleIcon">
            <img
              src={MentorProfileRole}
              className="ProfileRoleIcon"
              alt="CurrentRole"
            />
          </div>

          <div className="MentorProfileRoleDetails">
            <h4>Senior Engineering Lead</h4>

            <p>Google • Cloud Platform</p>

            <span>
              "Scaling infrastructure for
              <br />
              billions of users worldwide."
            </span>
          </div>
        </div>
      </div>

      <div className="MentorProfileAvailabilityCard">
        <div className="MentorProfileAvailabilityHeader">
          <h3>AVAILABILITY</h3>
          <span>NEXT WEEK</span>
        </div>

        <div className="MentorProfileAvailabilityList">
          <div className="MentorProfileAvailabilityItem">
            <p>Monday</p>
            <h4>6:00 PM - 8:00 PM</h4>
          </div>

          <div className="MentorProfileAvailabilityItem">
            <p>Wednesday</p>
            <h4>5:00 PM - 7:00 PM</h4>
          </div>

          <div className="MentorProfileAvailabilityItem booked">
            <p>Friday</p>
            <span>Fully Booked</span>
          </div>
        </div>
      </div>

      <div className="MentorProfileExpertiseCard">
        <h3>AREAS OF EXPERTISE</h3>

        <div className="MentorProfileExpertiseList">
          <span>Software Engineering</span>
          <span>System Design</span>
          <span>Career Coaching</span>
          <span>Cloud Architecture</span>
          <span>Interview Prep</span>
          <span>Leadership</span>
        </div>
      </div>
    </div>
  );
};
