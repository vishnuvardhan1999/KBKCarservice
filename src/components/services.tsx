import { MapPin, Car, Plane, Users, CalendarDays, Building2 } from "lucide-react";

const serviceImage = "/download (2).jpeg";

const services = [
  {
    icon: Building2,
    title: "South India Temple Tours",
    description: "Curated temple circuits across Tamil Nadu, Karnataka, and Kerala.",
  },
  {
    icon: MapPin,
    title: "Tirupati & Tirumala Pilgrimage",
    description: "Specialized darshan planning with trusted local experience.",
  },
  {
    icon: Car,
    title: "Local & Outstation Cab Service",
    description: "Comfortable AC cabs for city darshan and multi-day yatras.",
  },
  {
    icon: Plane,
    title: "Airport Pick-up & Drop",
    description: "On-time transfers from Tirupati, Chennai, and Bangalore airports.",
  },
  {
    icon: CalendarDays,
    title: "Driver Hire for Your Car",
    description: "Verified, professional drivers for short and long journeys.",
  },
  {
    icon: Users,
    title: "Family Temple Trip Planning",
    description: "End-to-end planning for safe and peaceful family trips.",
  },
];

export function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-left">
          <span className="services-kicker"><h1>Services</h1></span>
          <h3 className="services-title">Temple Travel, Made Truly Hassle-Free</h3>
          <p className="services-subtitle">
            From Tirupati darshan to extended South India temple tours, we handle every
            detail so you can focus on your prayers.
          </p>
          <div className="services-grid">
            {services.map((service, idx) => (
              <article
                key={service.title}
                className={`service-card service-card-${idx + 1}`}
              >
                <div className="service-icon-wrap">
                  <service.icon size={24} className="service-icon" />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="services-right">
          <div className="services-image-frame">
            <img
              src={serviceImage}
              alt="Comfortable cab for temple travel"
              className="services-image"
            />
            <div className="services-image-badge">
              <span className="services-badge-pill">Devotional Trips</span>
              <p className="services-badge-text">
                Trusted by families for <strong>safe & punctual</strong> temple journeys.
              </p>
            </div>
            <div className="services-stat-card">
              <div>
                <p className="services-stat-number">10+</p>
                <p className="services-stat-label">Years Experience</p>
              </div>
              <div className="services-stat-divider" />
              <div>
                <p className="services-stat-number">1000+</p>
                <p className="services-stat-label">Pilgrims Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
