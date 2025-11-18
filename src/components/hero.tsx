import { Phone, MessageCircle } from "lucide-react";

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918179634105", "_blank");
  };
  const handleCall = () => {
    window.location.href = "tel:+918179634105";
  };
  const scrollToBooking = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url('/Tirumala.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Your Trusted Temple Travel Cab Service Across South India</h1>
        <h2>KBK Car Service</h2>
        <p>
          Safe, devotional cab and driver service for Tirupati, Tamil Nadu temples,
          Karnataka temples, and Kerala pilgrimage routes.
          <br />
          <span style={{ fontWeight: 500, color: "#eac391" }}>
            With over 30 years of experience, we are dedicated to serving spiritual journeys.
          </span>
        </p>
        <div className="hero-actions">
          <button onClick={scrollToBooking} className="hero-btn main">
            Book Your Trip
          </button>
          <button onClick={handleCall} className="hero-btn">
            <Phone className="icon" /> Call
          </button>
          <button onClick={handleWhatsApp} className="hero-btn">
            <MessageCircle className="icon" /> WhatsApp
          </button>
        </div>
        <div className="hero-notice">
          ⚠️ Important: We do not provide darshan tickets or Tirumala rooms. We only provide travel and help you find good hotels across states.
        </div>
      </div>
    </section>
  );
}
