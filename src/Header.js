import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        ToDo Application
      </Link>
      <button onClick={() => setMenuOpen(!menuOpen)}>Open menu</button>
      {menuOpen && (
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="header-nav-item">
            Home
          </Link>
          <Link to="/about" className="header-nav-item">
            About
          </Link>
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
