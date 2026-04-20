import './Artists.css';
import RamleelaImg from '../images/Ramleela.png';
import SunderkandImg from '../images/Sunderkand.jpeg';
import BhagwatImg from '../images/bhagwat.jpeg';
import BhajanImg from '../images/Bhajan.png';
import RudrabhishekImg from '../images/Rudrabhishek copy.jpg';

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

const scrollItems = [...artists, ...artists, ...artists, ...artists];

function Artists() {
  return (
    <section className="artists">
      <h2>Featured Artists</h2>
      <div className="artist-container">
        <div className="scroll-wrapper">
          {scrollItems.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.img} alt={artist.service} />
              <h4>{artist.service}</h4>
              {/* <p>Professional Artist</p>  */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
