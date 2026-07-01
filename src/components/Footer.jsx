import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-box">
          <h3>InternMS</h3>

          <p>
            A complete solution to manage internships seamlessly from registration to placement.
          </p>

          <div className="socials">
            <span>f</span>
            <span>t</span>
            <span>in</span>
          </div>
        </div>


        <div className="footer-box">
          <h4>QUICK LINKS</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Features</p>
          <p>Internships</p>
        </div>


        <div className="footer-box">
          <h4>SUPPORT</h4>
          <p>FAQ</p>
          <p>Help Desk</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>


        <div className="footer-box">
          <h4>CONTACT US</h4>
          <p>hello@internhub.com</p>
          <p>+91 9876543210</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;