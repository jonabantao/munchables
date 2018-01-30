import React from 'react';
import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';

const NavBar = (props) => {
  const sessionCheck = props.currentUser ? 
    <NavBarGreeting currentUser={props.currentUser} logout={props.logout} /> : 
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