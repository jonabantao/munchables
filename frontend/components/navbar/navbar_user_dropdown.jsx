import React from 'react';

const NavBarUserDropdown = (props) => {
  return (
    <nav className="navbar__profile-dropdown">
      <button onClick={props.logout} 
        className="navbar__logout-button"
      >
        Logout
      </button>
            Placeholder text for (bonus) userprofile
    </nav>
  );
};

export default NavBarUserDropdown;