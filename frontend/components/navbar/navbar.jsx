import React from 'react';
import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img 
          src="https://i.imgur.com/RQxiUlk.png" 
          alt="logo" 
          className="navbar__logo-img"
        />
      </Link>
      <input type="text" value="SEARCH BAR PLACEHOLDER" />
      {
        currentUser ? <NavBarGreeting 
                        currentUser={currentUser} 
                        logout={logout} 
                      /> :
                      <NavBarSessionLinks />
      }
    </nav>
  );
};

export default NavBar;