import React from "react";
import { FiMail } from "react-icons/fi";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../assets/css/contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>✨ Mari Bekerjasama!</h2>
        <p>
          Apakah kamu ingin berdiskusi, kolaborasi proyek, atau hanya sekadar menyapa? Aku selalu terbuka! 💬
        </p>

        <div className="contact-methods">
          <a
            href="https://www.tiktok.com/@asyrofhm"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="icon" />
            @asyrofhm
          </a>

          <a
            href="https://wa.me/6281234567890"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />
            +62 812-3456-7890
          </a>

          <a
            href="https://instagram.com/asyrofhm"
            className="contact-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
            @asyrofhm
          </a>

          <a
            href="mailto:pengenjadikamenrider@gmail.com"
            className="contact-button"
            aria-label="Send Email"
          >
            <FiMail className="icon" />
            pengenjadikamenrider@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
