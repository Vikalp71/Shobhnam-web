// import './Hero.css';

// function Hero() {
//   return (
//     <section className="hero">
//       <h1>
//         <span className="raised-text1">India's First Artist Booking Platform</span>
//       </h1>

//       <p>
//         Book Ramleela, Sunderkand, Bhajan Sandhya, Bhagwat Katha
//         and many cultural programs easily.
//       </p>

//       <div className="hero-description">
//         <p>
//           Shobhnam ek spiritual artist booking platform hai jahan se aap Ramleela,
//           Sunderkand, Bhajan Sandhya, Bhagwat Katha aur Rudrabhishek jaise
//           dharmik aur sanskritik programs ke liye professional artists aur pandit
//           easily book kar sakte hain.
//         </p>

//         <p>
//           Agar aap apne ghar, mandir, society, ya kisi event me Ramleela karvana
//           chahte hain to hum aapko complete Ramleela team provide karte hain.
//           Sunderkand paath ke liye trained mandali available hai.
//           Bhajan Sandhya aur Bhagwat Katha ke liye experienced artists aur
//           kathavachak provide kiye jate hain.
//         </p>

//         <p>
//           Rudrabhishek aur anya pooja paath ke liye aap humse directly contact
//           kar sakte hain. Hum aapko trusted pandit aur artist provide karte hain
//           jo aapke event ko spiritual aur memorable banate hain.
//         </p>

//         <p className="download-line">
//           Apne event ki booking karne ke liye hamare app ko download kare aur
//           easily artist book kare.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Hero;




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


          <div className="coming-soon-badge">
    App Launching Soon 🚀
  </div>

          {/* <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/playstore.png"
              alt="Download App"
              className="playstore-btn"
            />
          </a> */}
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