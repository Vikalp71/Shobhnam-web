import './Artists.css';
import RamleelaImg from '../images/parshuram.png';
import SunderkandImg from '../images/sunderknd.png';
import BhagwatImg from '../images/katha.png';
import BhajanImg from '../images/sandhya.png';
import RudrabhishekImg from '../images/abhishek.png';

const artists = [
  { img: RamleelaImg, service: 'Ramleela' },
  { img: SunderkandImg, service: 'Sunderkand' },
  { img: BhagwatImg, service: 'Bhagwat Katha' },
  { img: BhajanImg, service: 'Bhajan Sandhya' },
  { img: RudrabhishekImg, service: 'Rudrabhishek' },
  { img: BhagwatImg, service: 'Bhagwat Katha' },
  { img: SunderkandImg, service: 'Sunderkand' },
  { img: RamleelaImg, service: 'Ramleela' },
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
              <img src={artist.img} alt={artist.service} />

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