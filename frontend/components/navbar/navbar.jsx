import React from 'react';
import { Link } from 'react-router-dom';

import NavBarGreeting from './navbar_greeting';
import NavBarSessionLinks from './navbar_session_links';
import SearchBarContainer from './search/search_bar_container';

const NavBar = ({ currentUser, logout, history }) => {
  const sessionContainer = currentUser ? (
    <NavBarGreeting
      currentUser={currentUser}
      logout={logout}
      history={history}
    />
  ) : (
    <NavBarSessionLinks />
  );

  const displaySearchContainer = history.location.pathname !== '/search' ?
    <SearchBarContainer /> : '';

  return (
    <section className="navbar-container">
      <nav className="navbar">
        <section className="navbar__left">
          <div className="navbar__logo-container">
            <Link to="/" className="navbar__logo">
              <img alt="logo" src="https://i.imgur.com/dfiQbk2.png" className="navbar__logo-img" />
            </Link>
          </div>
          {displaySearchContainer}
          <Link to="/recipes/new" className="navbar__create-recipe">
            Write a Munchable
          </Link>
        </section>
        {sessionContainer}
      </nav>
    </section>
  );
};

export default NavBar;