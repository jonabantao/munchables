import React, { Component } from 'react';
import NavBarUserDropdown from './navbar_user_dropdown';

class NavBarGreeting extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isUserMenuOpen: false,
    };
  }
  
  handleProfileOpen() {
    this.setState({ isUserMenuOpen: true });
  }

  handleProfileClose() {
    this.setState({ isUserMenuOpen: false });
  }

  renderProfileImage() {
    let knownProfileImg = this.props.currentUser.profile_img_url; 
    return knownProfileImg ? knownProfileImg : staticImages.defaultProfile;
  }

  render() {
    return (
      <section onClick={() => this.handleProfileOpen()} 
        className="navbar__greeting"
      >
        <img src={this.renderProfileImage()} 
          alt="profile image" 
          className="navbar__profile-img"
        />
        <small>{this.props.currentUser.username}</small>
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