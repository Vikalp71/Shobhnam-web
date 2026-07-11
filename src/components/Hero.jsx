
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          India's First Spiritual Artist Booking Platform ✨
        </span>

        <h1>
          Book Ramleela, Sunderkand, Bhagwat Katha &
          <span> Cultural Programs Easily</span>
        </h1>

        <p className="hero-subtitle">
          Shobhnam helps you book professional artists, pandits and spiritual
          performers for your events, temples, societies and family functions.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button className="book-btn">Book Now</button>


          {/* <div className="coming-soon-badge">
    App Launching Soon 🚀
  </div> */}

          <a
            href="https://play.google.com/store/apps/details?id=com.shobhnamofficial.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/playstore.png"
              alt="Download App"
              className="playstore-btn"
            />
          </a>
        </div>

        {/* Trust Stats */}
        {/* <div className="hero-stats">
          <div>
            <h3>500+</h3>
            <p>Events Completed</p>
          </div>

          <div>
            <h3>100+</h3>
            <p>Verified Artists</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Cities Covered</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;