import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from './icons/menuIcon.svg';
import './css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        ToDo Application
      </Link>
      <button className="header-toggle-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuIcon} alt="Open menu" />
      </button>
      {menuOpen && (
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="header-nav-item">
            Home
          </Link>
          <Link to="/about" className="header-nav-item">
            About
          </Link>
          <button className="header-close-menu-button" onClick={() => setMenuOpen(false)}>
            Close menu
          </button>
        </nav>
      )}
      {menuOpen && (
        <div
          className={`overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
