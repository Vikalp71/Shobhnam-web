import './Artists.css';

const artists = [
  { img: '/images/parshuram.png', service: 'Ramleela' },
  { img: '/images/sunderknd.png', service: 'Sunderkand' },
  { img: '/images/katha.png', service: 'Bhagwat Katha' },
  { img: '/images/sandhya.png', service: 'Bhajan Sandhya' },
  { img: '/images/abhishek.png', service: 'Rudrabhishek' },
  { img: '/images/katha.png', service: 'Bhagwat Katha' },
  { img: '/images/sunderknd.png', service: 'Sunderkand' },
  { img: '/images/parshuram.png', service: 'Ramleela' },
];

// const scrollItems = [...artists, ...artists];


// const scrollItems = [...artists, ...artists, ...artists, ...artists];
const scrollItems = artists;

function Artists() {
  return (
    <section className="artists">
      <div className="artist-heading">
        <h2>Featured Artists</h2>
        <p>Verified & experienced spiritual performers for your events</p>
      </div>

      <div className="artist-container">
        <div className="scroll-wrapper">
          {scrollItems.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.img} alt={artist.service} loading="lazy" decoding="async" />

              {/* Overlay */}
              <div className="artist-overlay">
                <h4>{artist.service}</h4>
                {/* <button>Book Now</button> */}
              </div>

              {/* Badge */}
              <div className="artist-badge">✔ Verified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;