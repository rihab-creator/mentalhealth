import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
     <div className="navbar-logo">
  <Link to="/" style={{ textDecoration: 'none',color: 'black'}}>
    <h1>Ana M3ak</h1>
  </Link>
</div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <NavLinks />
        <div className="navbar-buttons">
  <Link to="/login" className="btn login-btn">Login</Link>
  <Link to="/signup" className="btn signup-btn">Sign Up</Link>
</div>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
