import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarSessionLinks = () => (
  <nav className="navbar__session">
    <NavLink to="/login" className="navbar__button">Login</NavLink>
    <NavLink to="/signup" className="navbar__button">Sign Up</NavLink>
  </nav>
);

export default NavbarSessionLinks;
