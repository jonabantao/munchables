import React from 'react';
import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const sessionContainer = currentUser ? <NavBarGreeting
                                          currentUser={currentUser}
                                          logout={logout}
                                         /> :
                                        <NavBarSessionLinks />;
  return (
    <nav className="navbar">
      <section className="navbar__left">
        <Link to="/" className="navbar__logo">
            <h4>MUNCHABLES</h4>
        </Link>
        <input type="text" value="SEARCH BAR PLACEHOLDER" />
        <Link to="/recipes/new" className="navbar__create-recipe">
          Write a Munchable
        </Link>
      </section>
      {sessionContainer}
    </nav>
  );
};

export default NavBar;