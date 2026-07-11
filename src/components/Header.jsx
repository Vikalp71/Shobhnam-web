import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/images/Logo.png" alt="Shobhnam Logo" />
        <span>Shobhnam</span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {/* CTA Button */}
        <div className="cta-wrapper">
          <a
            href="https://play.google.com/store/apps/details?id=com.shobhnamofficial.app"
            target="_blank"
            rel="noopener noreferrer"
            className="header-app-link"
          >
            <img
              src="/images/playstore.png"
              alt="Download App"
              className="header-playstore-btn"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;