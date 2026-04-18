import './Artists.css';
import RamleelaImg from '../images/Ramleela.png';
import SunderkandImg from '../images/Sunderkand.jpeg';
import BhagwatImg from '../images/bhagwat.jpeg';
import BhajanImg from '../images/Bhajan.png';
import RudrabhishekImg from '../images/Rudrabhishek copy.jpg';

const artists = [
  { img: RamleelaImg, name: 'Ram Narayan Mishra', service: 'Ramleela' },
  { img: SunderkandImg, name: 'Pandit Anil Bajpai', service: 'Sunderkand' },
  { img: BhagwatImg, name: 'Pandit Anil Dubey', service: 'Bhagwat Katha' },
  { img: BhajanImg, name: 'Pandit Malay Pandey', service: 'Bhajan Sandhya' },
  { img: RudrabhishekImg, name: 'Pandit Rajan Bajpai', service: 'Rudrabhishek' },
  { img: BhagwatImg, name: 'Pandit Rishabh', service: 'Bhagwat Katha' },
  { img: SunderkandImg, name: 'Pandit Anil Bajpai', service: 'Sunderkand' },
  { img: RamleelaImg, name: 'Pandit Ram Narayan Mishra', service: 'Ramleela' },
];

const scrollItems = [...artists, ...artists];

function Artists() {
  return (
    <section className="artists">
      <h2>Featured Artists</h2>
      <div className="artist-container">
        <div className="scroll-wrapper">
          {scrollItems.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.img} alt={artist.name} />
              <h4>{artist.name}</h4>
              <p>{artist.service}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
