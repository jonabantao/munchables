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
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ isUserMenuOpen: false });
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }

  handleClick() {
    if (!this.state.isUserMenuOpen) {
      document.addEventListener('click', this.handleOutsideClick);
      this.setState({ isUserMenuOpen: true });
    } 
  }

  setWrapper(node) {
    this.node = node;
  }

  render() {
    const currentUser = this.props.currentUser;

    return (
      <section className="navbar__greeting" 
        ref={this.setWrapper} 
        onClick={this.handleClick}
      >
        <img src={currentUser.profile_img_url} 
          alt="profile image" 
          className="navbar__profile-img"
        />
        <small>{currentUser.username}</small>
        <i className="fas fa-caret-down navbar__caret"></i>
        {
          this.state.isUserMenuOpen && <NavBarUserDropdown 
                                        logout={this.props.logout}
                                      />
        }
      </section>
  );
  }
}

export default NavBarGreeting;