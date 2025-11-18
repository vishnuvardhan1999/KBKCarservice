import React from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Left - Branding & Description */}
          <div>
            <h3 className="footer-title">KBK Car Service</h3>
            <p className="footer-desc">
              30+ years of trusted temple travel service across South India.<br />
              Safe, devotional, family-friendly tours for pilgrims.
            </p>
          </div>
          {/* Center - Quick Links */}
          <div>
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#routes">Temple Routes</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* Right - Contact */}
          <div>
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone className="footer-icon" />
                <a href="tel:+918179634105">+91 81796 34105</a>
              </li>
              <li>
                <MessageCircle className="footer-icon" />
                <a href="https://wa.me/918179634105" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <Mail className="footer-icon" />
                <a href="mailto:vishnuvardhanmec3@gmail.com">vishnuvardhanmec3@gmail.com</a>
              </li>
              <li>
                <MapPin className="footer-icon" />
                Tirupati, Tamil Nadu • Karnataka • Kerala
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} KBK Car Services. All rights reserved.<br />
          Safe travels, devotional service, complete peace of mind.
        </div>
      </div>
    </footer>
  );
}
