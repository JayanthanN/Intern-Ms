import group from "../assets/register/group.png";
import line from "../assets/register/progressline.png";
import HRicon from "../assets/register/HR-icon.png";
import mentor from "../assets/register/mentor.png";
import intern from "../assets/register/intern.png";
import company from "../assets/register/company.png";
import internhub from "../assets/register/internhub.png";
import eyeicon from "../assets/register/eye-icon.png";
import "./HRRegister.css";

function HRRegister() {
  return (
    <div className="HR-page">
      <div className="hr-leftpage">
        <h3 className="inter-logo">InterMS</h3>

        <div className="hr-heading">
          <h1>Empower your team with top-tier talent.</h1>

          <p className="hr-text">
            Streamline your recruitment process, manage internships with ease,
            and connect with the next generation of industry leaders.
          </p>
        </div>

        <div className="hr-dashboard">

            <div className="hr-dashboard-header">

            <div className="group-icon">

            <img src={group} className="group" alt="group-icon" />

             </div>

             <div className="hr-dashboard-content">

            <h3>Unified Talent Dashboard</h3>

            <h5>Monitor all applications in real-time.</h5>
         
           </div>
          </div>
          
          <img src={line} className="line" alt="line-icon" />

          <div className="hr-dashboard-footer">
     
          <p>75% Efficiency Boost</p>

          <p>120+ Placements</p>

        </div>
      </div>

          <div className="hr-footer">
            <div className="hr-stat">
              <h3>500+</h3>
              <p>COMPANIES</p>
            </div>
            <div className="hr-stat">
              <h3>10k+</h3>
              <p>STUDENTS</p>
            </div>
            </div>
          
        </div>
        <div className="hr-rightpage">

            <h1>Create your HR account</h1>

            <p>Join our ecosystem of professional employers.</p>


            <div className="role-selection">

             <p className="role-title">Registering as</p>

             <div className="role-container">

                <div className="role-card active">

                    <img src={HRicon} alt="HR-icon"/>
                    <h4>HR</h4>
                </div>

                <div className="role-card">

                    <img src={mentor} alt="mentor-icon"/>
                    <h4>Mentor</h4>
                </div>

                <div className="role-card">

                    <img src={intern} alt="intern-icon"/>
                    <h4>Intern</h4>
                </div>

                <div className="role-card">

                    <img src={company} alt="company-icon"/>
                    <h4>Company</h4>
                </div>

             </div>

            </div>

            <form className="hr-form">

                <div className="form-row">
                 
                 <div className="inputgroup">
                    <label>Full Name <span className="required">*</span></label>

                    <input type="text" placeholder="John Doe"/>

                 </div>
                 <div className="inputgroup">
                    <label>Work Email Address <span className="required">*</span></label>

                    <input type="mail" placeholder="john.doe@company.com"/>

                 </div>

                </div>

                <div className="form-row">
                 
                 <div className="inputgroup">
                    <label>Phone Number <span className="required">*</span></label>
                     
                     <div className="phone-input">
                        <div className="country-code">
                            <h5>+91</h5>
                        </div>
                    <input type="tel" placeholder="Enter your number"/>

                 </div>
                 </div>
                 <div className="inputgroup">
                    <label>Department <span className="required">*</span></label>

                    <select>
                          <option value="">Select Department</option>
                    </select>      
                    
                 </div>

                </div>

                <div className="inputgroup-full">
                    
                    <label>Company Name<span className="required">*</span></label>

                     <div className="company-input">
                    <img src={internhub}className="interhub" alt="interhub-icon"/>
                     <input type="text"
                      placeholder="InternHub Inc."/>
                 </div>
                </div>
                <div className="form-row">
                 
                 <div className="password-input">
                    <label>Password<span className="required">*</span></label>

                    <input type="password" placeholder="Create a strong password"/>

                    <img src={eyeicon} className="eye" alt="eye-icon"/>

                 </div>
                 <div className="password-input">

                    <label>Confirm Password <span className="required">*</span></label>

                    <input type="password" placeholder="Confirm your password"/>

                    <img src={eyeicon} className="eye" alt="eye-icon"/>
                    
                 </div>

                </div>






















            </form>




        </div>








    </div>
  );
}

export default HRRegister;
