import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section brand-section">
          <img src="/images/Logo.png" alt="Shobhnam Logo" className="footer-logo" />

          <h2>Shobhnam</h2>

          <p>
            India's First Spiritual Artist Booking Platform where you can book
            Ramleela, Sunderkand, Bhajan Sandhya, Bhagwat Katha and many
            cultural programs easily.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>

          <ul className="footer-services">
            <li>Ramleela Booking</li>
            <li>Sunderkand Booking</li>
            <li>Bhajan Sandhya</li>
            <li>Bhagwat Katha</li>
            <li>Rudrabhishek</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📧 shobhnam412@gmail.com</p>
          <p>📞 +91 9559508108</p>
          <p>📍 Kalyanpur, Kanpur, Uttar Pradesh</p>

          <div className="coming-soon-footer">
            📱 App Launching Soon
          </div>
        </div>


        <div className="footer-section">
          <h3>Information</h3>

          <ul className="footer-info">
            {/* <li>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                About Us
              </Link>
            </li> */}
            <li>
              <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Privacy Policy
              </Link>
            </li>
            {/* <li>
              <Link to="/disclaimer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Disclaimer
              </Link>
            </li> */}

            <li>
              <Link to="/terms-conditions" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Refund Policy
              </Link>


            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Shobhnam.in | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;