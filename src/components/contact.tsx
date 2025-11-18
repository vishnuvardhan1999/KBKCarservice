import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    travelDate: "",
    pickupLocation: "",
    templeDestinations: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validate(data: typeof formData) {
    const errs: { [key: string]: string } = {};
    if (!data.fullName) errs.fullName = "Full name is required";
    if (!data.phoneNumber) errs.phoneNumber = "Phone number is required";
    if (!/^\d{10,}$/.test(data.phoneNumber)) errs.phoneNumber = "Enter a valid phone number";
    if (!data.email) errs.email = "Email is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errs.email = "Enter a valid email";
    if (!data.travelDate) errs.travelDate = "Date is required";
    if (!data.pickupLocation) errs.pickupLocation = "Pickup location is required";
    if (!data.templeDestinations) errs.templeDestinations = "Temple destinations are required";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        travelDate: "",
        pickupLocation: "",
        templeDestinations: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Book Your Temple Journey</h2>
        <p className="contact-subtitle">
          Share your travel plan and we’ll get back to you soon!
        </p>
        <div className="contact-grid">
          {/* Contact form */}
          <div className="contact-form-block">
            {submitted ? (
              <div className="contact-success-card">
                <div className="contact-success-icon">
                  <MessageCircle size={32} />
                </div>
                <h3>Thank You!</h3>
                <p>
                  We have received your enquiry. Our team will contact you soon to
                  discuss your temple travel plans.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-row">
                  <div>
                    <label>
                      Full Name *
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <span className="contact-error">{errors.fullName}</span>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>
                      Phone Number *
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        pattern="\d{10,}"
                      />
                      {errors.phoneNumber && (
                        <span className="contact-error">{errors.phoneNumber}</span>
                      )}
                    </label>
                  </div>
                </div>
                <div className="contact-row">
                  <div>
                    <label>
                      Email Address *
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <span className="contact-error">{errors.email}</span>
                      )}
                    </label>
                  </div>
                  <div>
                    <label>
                      Travel Date *
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                      />
                      {errors.travelDate && (
                        <span className="contact-error">{errors.travelDate}</span>
                      )}
                    </label>
                  </div>
                </div>
                <label>
                  Pickup Location *
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g., Chennai Airport, Bangalore, etc."
                  />
                  {errors.pickupLocation && (
                    <span className="contact-error">{errors.pickupLocation}</span>
                  )}
                </label>
                <label>
                  Temple Destinations / Travel Plan *
                  <input
                    type="text"
                    name="templeDestinations"
                    value={formData.templeDestinations}
                    onChange={handleChange}
                    placeholder="e.g., Tirupati, Rameswaram, Madurai, etc."
                  />
                  {errors.templeDestinations && (
                    <span className="contact-error">{errors.templeDestinations}</span>
                  )}
                </label>
                <label>
                  Message / Special Request
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions..."
                  />
                </label>
                <button type="submit" className="contact-btn">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
          {/* Contact Details */}
          <div className="contact-details-block">
            <div className="contact-details-card">
              <h4>Contact Details</h4>
              <ul>
                <li>
                  <Phone className="contact-details-icon" />
                  <a href="tel:+918179634105">8179634105</a>
                </li>
                <li>
                  <MessageCircle className="contact-details-icon" />
                  <a
                    href="https://wa.me/918179634105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li>
                  <Mail className="contact-details-icon" />
                  <a href="mailto:vishnuvardhanmec3@gmail.com">vishnuvardhanmec3@gmail.com</a>
                </li>
              </ul>
              <div className="contact-response">
                <strong>Response Time:</strong>
                <div>
                  We typically respond within 2-4 hours during business hours (8 AM -
                  8 PM IST)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
