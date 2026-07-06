import "../styles/footer.css";
import icon1 from "../assets/Container (3).png";
import icon2 from "../assets/Container (4).png";
import heart from "../assets/heart.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>InternMS</h2>

          <p>
            The ultimate platform for managing internships,
            connecting talent, and building the future of work.
          </p>

          <div className="social-icons">
             <img src={icon2} alt="icon2" className="social-icon-img" />
             <img src={icon1} alt="icon1" className="social-icon-img" />
           
          </div>
        </div>

        <div className="footer-links">
          <h4>Product</h4>
          <p>For Students</p>
          <p>For Employers</p>
          <p>For Universities</p>
          <p>Pricing</p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Resources</p>
          <p>Contact Us</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 InternMS. All rights reserved.</p>
        <p>Made with <img src ={heart} className="heart-icon"/> for future workforce</p>
      </div>

    </footer>
  );
}

export default Footer;