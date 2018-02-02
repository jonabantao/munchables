import React, { Component } from 'react';
import NavBarUserDropdown from './navbar_user_dropdown';

class NavBarGreeting extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isUserMenuOpen: false,
    };
  }
  
  handleProfileWindow() {
    this.setState({ isUserMenuOpen: !this.state.isUserMenuOpen });
  }

  render() {
    const currentUser = this.props.currentUser;

    return (
      <section onClick={() => this.handleProfileWindow()} 
        className="navbar__greeting"
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