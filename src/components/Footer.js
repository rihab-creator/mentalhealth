import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
        <div className="navbar-logo">
  <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>
    <h1>Ana M3ak</h1>
  </Link>
</div>
          <p>
         Ana M3ak est une plateforme dédiée au bien-être mental. Elle offre un espace sécurisé pour accéder à des professionnels qualifiés et bénéficier de consultations anonymes, adaptées aux besoins de chacun.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Notre Plateforme</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section links">
        <h3>Ressources Complémentaires</h3>
          <ul>
            <li><a href="/FAQ">FAQ</a></li>
            <li><a href="/joinus">Nous rejoindre</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/espace Presse">Espace Presse</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Suivez-Nous</h3>
          <ul>
            <li><a href="#"><img src="facebook.png" alt="Facebook" /></a></li>
            <li><a href="#"><img src="ins.png" alt="Instagram" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ana M3AK | Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
