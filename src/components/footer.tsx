import React from 'react';
import '../assets/css/footer.css';

const services = [
  'Web Development',
  'Cybersecurity',
  'Design Grafis',
];

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6281234567890', // ganti dengan nomor WA kamu
    icon: '/icons/whatsapp-icon.png',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/asyrof_ilustrasi',
    icon: '/icons/instagram-icon.png',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@asyrofmaulana',
    icon: '/icons/tiktok-icon.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/asyrofmaulana',
    icon: '/icons/github-icon.png',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/asyrofmaulana',
    icon: '/icons/linkedin-icon.png',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Asyrof Maulana</h2>
          <p>Digital Illustrator & Web Developer</p>
        </div>

        <div className="footer-services">
          <h3>Layanan</h3>
          <ul>
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
            >
              <img src={icon} alt={name} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Asyrof Hafizh Maulana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
