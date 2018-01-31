import React from 'react';

const NavBarGreeting = ({ currentUser, logout }) => {
  return (
    <section className="navbar__session">
      {currentUser.username}
      <button onClick={logout}>Logout</button>
    </section>
  );
};

export default NavBarGreeting;