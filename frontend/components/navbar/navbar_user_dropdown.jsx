import React from 'react';

const NavBarUserDropdown = (props) => {
  return (
    <nav className="navbar__profile-dropdown">
      <button onClick={(e) => {
        e.preventDefault();
        props.logout()
          .then(() => props.history.push('/'));
      }} 
        className="navbar__logout-button"
      >
        Logout
      </button>
            Placeholder text for (bonus) userprofile
    </nav>
  );
};

export default NavBarUserDropdown;