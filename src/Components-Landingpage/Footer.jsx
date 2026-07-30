import "./Footer.css";
import Mail from "../assets/mail.png";
import Globe from "../assets/globe.png";
import Heart from "../assets/heart.png";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterTop">
        <div className="FooterBrand">
          <h2>InternMS</h2>

          <p>
            The ultimate platform for managing internships, connecting talent,
            and building the future of work.
          </p>

          <div className="SocialIcons">
            <img src={Globe} alt="globe-icon" className="SocialIconImg" />
            <img src={Mail} alt="mail-icon" className="SocialIconImg" />
          </div>
        </div>

        <div className="FooterLinks">
          <h4>Product</h4>
          <p>For Students</p>
          <p>For Employers</p>
          <p>For Universities</p>
          <p>Pricing</p>
        </div>

        <div className="FooterLinks">
          <h4>Company</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Resources</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="FooterBottom">
        <p>&copy; 2026 InternMS. All rights reserved.</p>
        <p>
          Made with <img src={Heart} className="HeartIcon" /> for future
          workforce
        </p>
      </div>
    </footer>
  )
}
