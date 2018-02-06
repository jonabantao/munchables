import React from 'react';
import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';
import SearchBarContainer from './search/search_bar_container';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, history }) => {
  const sessionContainer = currentUser ? <NavBarGreeting
                                          currentUser={currentUser}
                                          logout={logout}
                                          history={history}
                                         /> :
                                        <NavBarSessionLinks />;
                                        
  return (
    <nav className="navbar">
      <section className="navbar__left">
        <Link to="/" className="navbar__logo">
            <h4>MUNCHABLES</h4>
        </Link>
        <SearchBarContainer />
        <Link to="/recipes/new" className="navbar__create-recipe">
          Write a Munchable
        </Link>
      </section>
      {sessionContainer}
    </nav>
  );
};

export default NavBar;