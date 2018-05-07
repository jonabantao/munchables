import React from 'react';
import { Link } from 'react-router-dom';

const NavBarUserDropdown = (props) => {
  return (
    <nav className="navbar__profile-dropdown">
      <button
        onClick={(e) => {
        e.preventDefault();
        props.logout()
          .then(() => props.history.push('/'));
      }}
        className="navbar__logout-button"
      >
        Logout
      </button>
      <div className="lol">
        <Link to={`/users/${props.currentUser.id}/`}>
          <h2 className="navbar__dropdown-profile">
            <i className="fas fa-user" /> Profile
          </h2>
        </Link>
      </div>
      <Link to="/recipes/new/">
        <div className="navbar__dropdown-create">
            Write a Munchable
        </div>
      </Link>
    </nav>
  );
};

export default NavBarUserDropdown;
