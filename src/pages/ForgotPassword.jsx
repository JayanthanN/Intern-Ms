import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lock from "../assets/lock.png";
import Rarrow from "../assets/right-arrow.png";
import backleft from "../assets/backleft.png";
import "./ForgotPassword.css"

function ForgotPassword(){

    const[selected,setSelected]=useState("");
    const navigate = useNavigate();

    const handleSend =()=>{
            navigate("/Login",{
                state:{
                    method:selected
                },
            });
        }
    return(


        <div className="forgot-container">
             
            <div className="forgot-left-container">

                <h1 className="forgot-heading">Regain access to your professional future.</h1>

                <p className="forgot-content">We're here to help you get back on track. 
                    Secure your account and continue exploring the best internship 
                    opportunities worldwide.</p>

            
               <div className="forgot-foot">
                  <p>&copy;2024 InternMS</p>
                  <span className="dot"></span>
                  <p>Privacy Policy</p>
               </div>
           </div>


           <div className="forgot-right-container">

                <div className="forgot-nav">
                    
                    <a href="/">Help</a>
                    <a href="/login">Login</a>
                </div>

                <div className="forgot-header">
                    <div className="lock">
                       <img src={lock}className="header-lock"/>
                    </div>
                    <h2>Forgot Password?</h2>

                    <p className="forgot-text">Choose your preferred method to receive a one-time verification code.</p>

                    <h5>Verification Method</h5>               
                </div>

                <div className="method-card">


                     <label className= {`Mail-forgot ${selected ==="email"?"active":""}`}
                              onClick={()=>setSelected("email")}>

                       <input  type="radio" 
                        name="forgot"
                        checked={selected === "email"}
                        onChange={()=> setSelected("email")}
                        className="forgot"/>


                        <div className="forgot-info">
                            <h4>Email Address</h4>

                            <p>Send code to j**n@g***l.com</p>
                       </div>

                    </label>

                </div> 

                <div className="method-card">

                     <label className= {`Mobile-forgot ${selected ==="mobile"?"active":""}`}
                              onClick={()=>setSelected("mobile")}>

                         <input  type="radio" 
                                name="forgot"
                                checked={selected === "mobile"}
                                onChange={()=> setSelected("mobile")}
                                className="forgot"/>


                         <div className="forgot-info">
                             <h4>SMS / Text Message</h4>

                             <p>Send code to +91 9•••• •5678</p>
                         </div>

                      </label> 
                  </div>  

                         <button className="sendv-code">
                            Send Verification Code
                            <img src={Rarrow} className="Rarrow"/>

                         </button>


                    <div className="right-footer">

                        <img src={backleft} className="backleft"/>

                        <a href="/login" className="login-back">Back to Login</a>
                    </div>
                

             </div>

           </div>
    
    );
    
}
export default ForgotPassword;

