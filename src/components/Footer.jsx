// import './Footer.css';

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">

//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: shobhnam412@gmail.com</p>
//           <p>Phone: +91 9559508108</p>
//           <p>Address: Kalyanpur Kanpur, Uttar Pradesh</p>
//         </div>

//         <div className="footer-section">
//           <h3>Services</h3>
//           <ul className="footer-services">
//             <li><a href="#">Ramleela Booking</a></li>
//             <li><a href="#">Sunderkand Booking</a></li>
//             <li><a href="#">Bhajan Sandhya</a></li>
//             <li><a href="#">Bhagwat Katha</a></li>
//             <li><a href="#">Rudrabhishek</a></li>
//             <li><a href="#">Other Services</a></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3>Download Our App</h3>
//           <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="playstore-btn">
//             <img src="/images/playstore.png" alt="Google Play" />
//           </a>

//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-facebook"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-instagram"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-twitter"></i>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-linkedin"></i>
//             </a>
//           </div>
//         </div>

//       </div>

//       <p className="copyright">
//         © 2026 Shobhnam.in | India's first artist platform
//       </p>
//     </footer>
//   );
// }

// export default Footer;



import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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