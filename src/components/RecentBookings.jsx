import './RecentBookings.css';

const bookings = [
  { img: '/images/Parshuram.jpeg', name: 'Ram Narayan Mishra', service: 'Parshuram' },
  { img: '/images/Ram.jpeg', name: 'Saurabh Awasthi', service: 'Ram' },
  { img: '/images/Laxman.jpeg', name: 'Abhishek Tripathi', service: 'Laxman' },
  { img: '/images/Arvind.jpeg', name: 'Arvind Dwivedi', service: 'Bhagwat Katha' },
 
  // { img: lax, name: 'Ram Narayan Mishra', service: 'Ramleela' },

];

const duplicateBookings = [
  { img: '/images/Ram.jpeg', name: 'Saurabh Awasthi', service: 'Ram' },
  { img: '/images/Laxman.jpeg', name: 'Abhishek Tripathi', service: 'Laxman' },
  { img: '/images/Arvind.jpeg', name: 'Arvind Dwivedi', service: 'Bhagwat Katha' },
  { img: '/images/Parshuram.jpeg', name: 'Ram Narayan ', service: 'Parshuram' },

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
