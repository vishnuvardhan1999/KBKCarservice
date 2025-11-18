import React from "react";
import {
  Calendar,
  Map,
  Shield,
  Heart,
  DollarSign,
  Hotel,
  UserCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "30+ Years Experience",
    description:
      "Three decades of dedicated temple travel service across South India",
  },
  {
    icon: Map,
    title: "Expert Route Knowledge",
    description:
      "Familiar with all major temple routes, timings, and local customs",
  },
  {
    icon: Shield,
    title: "Safe & Comfortable",
    description: "Well-maintained vehicles and experienced, careful drivers",
  },
  {
    icon: Heart,
    title: "Devotional Approach",
    description: "Family-friendly service with understanding of pilgrim needs",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "Transparent rates with no hidden charges or surprises",
  },
  {
    icon: Hotel,
    title: "Hotel Assistance",
    description:
      "Help finding trusted, comfortable hotels in Tirupati and other locations",
  },
  {
    icon: UserCheck,
    title: "Flexible Service",
    description:
      "Driver available for your own car or complete cab service",
  },
];

const chooseImage = "/arunachalam.jpeg";

export function WhyChooseUs() {
  return (
    <section className="whychooseus-section" id="why-choose-us">
      <div className="whychooseus-row">
        {/* Left: image */}
        <div className="whychooseus-image-wrap">
          <img
            src={chooseImage}
            alt="Devotional cab service"
            className="whychooseus-main-img"
          />
        </div>

        {/* Right: heading + grid */}
        <div className="whychooseus-content-col">
          <h2 className="whychooseus-title">Why Choose Us</h2>
          <p className="whychooseus-subtitle">
            <h4>Trusted by thousands of devotees for safe and spiritual journeys</h4>
          </p>

          <div className="whychooseus-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`whychooseus-benefit-box benefit-box-${idx + 1}`}
              >
                <div className="whychooseus-benefit-icon">
                  {React.createElement(benefit.icon, {
                    size: 26,
                    className: "icon",
                    color: "#ae8b3c",
                  })}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
