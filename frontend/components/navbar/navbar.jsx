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
          <div className="navbar__logo-container">
        <Link to="/" className="navbar__logo">
            <img src="https://i.imgur.com/iPT49li.png" className="navbar__logo-img"/>
        </Link>
          </div>
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