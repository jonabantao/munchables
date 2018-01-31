import React from 'react';
import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';

const NavBar = ({ currentUser, logout }) => {
  const sessionCheck = currentUser ? 
    <NavBarGreeting currentUser={currentUser} logout={logout} /> : 
    <NavBarSessionLinks />;

  return (
    <nav className="navbar">
      This is a navbar.
      // Search Bar Container
      {sessionCheck}
    </nav>
  );
};

export default NavBar;