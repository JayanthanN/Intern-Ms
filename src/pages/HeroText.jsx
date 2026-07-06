import"./HeroText.css";

function HeroText() {
    return (
        <div className="hero-container">
            <h2 className="hero-logo">InternHub</h2>

            <h2 className= "hero-heading">Your next big leap starts here</h2>

            <p className="hero-text">
                Connect with industry leaders, manage your applications,
                and accelerate your career path with our comprehensive internship management platform.
            </p>

          <div className="hero-stats">
            
                <div className="hero-statbox">
                   <h3>500+</h3>
                   <p>Partner Companies</p>
                </div>

                <div className="hero-statbox">
                    <h3>10k+</h3>
                    <p>Success Stories</p>
                </div>
           </div> 

               <p className="hero-footer">
                &copy; 2024 InternMS
               </p>
        </div>
       
        
    )
}

export default HeroText;