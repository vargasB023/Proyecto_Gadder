import React from 'react';
import './Css/Footer.css';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a href="https://www.gmail.com" className="footer-link">
            <FaEnvelope className="footer-icon" />
            Gmail
          </a>
          <a href="https://www.instagram.com/" className="footer-link">
            <FaInstagram className="footer-icon" />
            Instagram
          </a>
          <a href="https://web.whatsapp.com/" className="footer-link">
            <FaWhatsapp className="footer-icon" />
            WhatsApp
          </a>
        </div>
        <p className="footer-copyright">&copy; GADDER</p>
      </footer>
    );
  }
  

export default Footer;