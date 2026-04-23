import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Shobhnam se Ramleela booking bahut easy thi. Artists professional the aur program bahut achha hua.",
    name: "Rohit Sharma",
    city: "Lucknow",
  },
  {
    quote:
      "Sunderkand mandali time par aayi aur poora event smoothly complete hua.",
    name: "Amit Verma",
    city: "Kanpur",
  },
  {
    quote:
      "Bhajan Sandhya booking experience bahut achha raha. Support team bhi helpful thi.",
    name: "Priya Singh",
    city: "Delhi",
  },
  {
    quote:
      "Rudrabhishek pandit ji bahut knowledgeable the. Pooja bahut achhe se hui.",
    name: "Vikas Tiwari",
    city: "Varanasi",
  },
  {
    quote:
      "Bhagwat Katha ka program bahut spiritual tha. Family ko bahut pasand aaya.",
    name: "Neha Gupta",
    city: "Ayodhya",
  },
];

const scrollItems = [...testimonials, ...testimonials];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h2>What Our Customers Say ❤️</h2>
        <p>
          हजारों लोगों ने Shobhnam पर spiritual events book किए और शानदार अनुभव पाया।
        </p>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-scroll">
          {scrollItems.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <FaQuoteLeft className="quote-icon" />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>{item.quote}</p>

              <div className="user-info">
                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;