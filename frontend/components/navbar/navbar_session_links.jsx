import React from 'react';
import { Link } from 'react-router-dom';

const NavbarSessionLinks = () => {
  return (
    <nav className="navbar__session">
      <Link to="/login" className="navbar__button">Log In</Link>
      <Link to="/signup" className="navbar__button">Sign Up</Link>
    </nav>
  );
};

export default NavbarSessionLinks;