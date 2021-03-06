import React, { Component } from 'react';
import NavBarUserDropdown from './navbar_user_dropdown';

class NavBarGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserMenuOpen: false,
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setWrapper = this.setWrapper.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  setWrapper(node) {
    this.node = node;
  }

  handleClick() {
    if (!this.state.isUserMenuOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isUserMenuOpen: !prevState.isUserMenuOpen,
    }));
  }

  handleOutsideClick(e) {
    e.preventDefault();

    this.handleClick();
  }

  displayDropdown() {
    if (this.state.isUserMenuOpen) {
      return (
        <NavBarUserDropdown
          logout={this.props.logout}
          history={this.props.history}
          currentUser={this.props.currentUser}
        />
      );
    }

    return null;
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="navbar__wrapper" ref={this.setWrapper}>
        <section
          className="navbar__greeting"
          onKeyPress={this.handleClick}
          onClick={this.handleClick}
          tabIndex={0}
          role="menu"
        >
          <div className="navbar__profile-img-container">
            <img
              src={currentUser.profile_img_url}
              alt="profile"
              className="navbar__profile-img"
            />
          </div>
          <small>{currentUser.username}</small>
          <i className="fas fa-caret-down navbar__caret" />
        </section>
        {this.displayDropdown()}
      </div>
    );
  }
}

export default NavBarGreeting;
