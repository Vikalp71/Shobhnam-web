import './RecentBookings.css';
import ArvindImg from '../images/Arvind.jpeg';
import ParshuramImg from '../images/Parshuram.jpeg';
import RamImg from '../images/Ram.jpeg';
import LaxmanImg from '../images/Laxman.jpeg';
// import lax from '../images/Lax.jpeg';

const bookings = [

  { img: ParshuramImg, name: 'Ram Narayan Mishra', service: 'Parshuram' },
  { img: RamImg, name: 'Saurabh Awasthi', service: 'Ram' },
  { img: LaxmanImg, name: 'Abhishek Tripathi', service: 'Laxman' },
  { img: ArvindImg, name: 'Arvind Dwivedi', service: 'Bhagwat Katha' },
  // { img: lax, name: 'Ram Narayan Mishra', service: 'Ramleela' },

];

const duplicateBookings = [
  { img: RamImg, name: 'Ram Narayan', service: 'Sunderkand' },
  { img: LaxmanImg, name: 'Laxman Prasad', service: 'Bhajan Sandhya' },
  { img: ArvindImg, name: 'Arvind Singh', service: 'Ramleela' },
  { img: ParshuramImg, name: 'Parshuram Kumar', service: 'Bhagwat Katha' },

];

const scrollItems = [...bookings, ...duplicateBookings];

function RecentBookings() {
  return (
    <section className="orders">
      <h2>Meet our famous artists</h2>
      <div className="artist-container orders-container">
        <div className="scroll-wrapper orders-scroll">
          {scrollItems.map((item, index) => (
            <div className="artist-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentBookings;
