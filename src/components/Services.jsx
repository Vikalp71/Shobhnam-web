import "./Services.css";

const services = [
  {
    id: "ramleela-service",
    name: "Ramleela",
    desc: "Book professional Ramleela artists for grand spiritual events.",
  },
  {
    id: "sunderkand-service",
    name: "Sunderkand",
    desc: "Experience soulful Sunderkand path with expert mandalis.",
  },
  {
    id: "bhajan-service",
    name: "Bhajan Sandhya",
    desc: "Book devotional singers for bhajan evenings.",
  },
  {
    id: "bhagwat-service",
    name: "Bhagwat Katha",
    desc: "Hire experienced kathavachaks for Bhagwat events.",
  },
  {
    id: "rudrabhishek-service",
    name: "Rudrabhishek",
    desc: "Organize powerful Rudrabhishek puja with pandits.",
  },
  {
    id: "other-service",
    name: "Other Services",
    desc: "Explore more cultural and spiritual services.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-heading">
        <h2>Our Services</h2>
        <p>
          Discover spiritual and cultural programs tailored for your special
          occasions.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div className={`service-card ${service.id}`} key={service.id}>
            <div className="overlay"></div>

            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
