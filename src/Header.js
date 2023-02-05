import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        ToDo Application
      </Link>
      <nav className="header-nav">
        <Link to="/" className="header-nav-item">
          Home
        </Link>
        <Link to="/about" className="header-nav-item">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
