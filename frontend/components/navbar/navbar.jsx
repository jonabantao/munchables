import React from 'react';
import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';

const NavBar = ({ currentUser, logout }) => {
  return (
    <nav className="navbar">
      This is a navbar.
      // Search Bar Container
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