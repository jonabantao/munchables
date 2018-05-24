import React, { Component } from 'react';
import LoadingRecipes from '../loading/loading_recipes';
import PersonalProfile from './personal_profile';
import PublicProfile from './public_profile';

class UserProfile extends Component {
  componentDidMount() {
    this.props.requestUser(this.props.userId);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.userId !== this.props.userId) {
      this.props.requestUser(this.props.userId);
    }
  }

  render() {
    if (!this.props.user || this.props.isLoadingUser) {
      return <LoadingRecipes />;
    }

    const { currentUser, user, recipes } = this.props;
    const pubRecipes = recipes.filter(recipe => recipe.published);
    const unpubRecipes = recipes.filter(recipe => !recipe.published);
    const plural = user.comment_count === 1 ? '' : 's';

    const displayProfile = currentUser && currentUser.id === user.id ?
      (
        <PersonalProfile
          pubRecipes={pubRecipes}
          unpubRecipes={unpubRecipes}
        />
      ) : (
        <PublicProfile
          user={user}
          recipes={pubRecipes}
        />
      );

    return (
      <React.Fragment>
        <header className="profile-header-container">
          <section className="profile-header">
            <div className="profile-header__image-wrapper">
              <img
                src={user.profile_img_url}
                alt="profile"
                className="profile-header__image"
              />
            </div>
            <div className="profile-header__user-info">
              <h3 className="profile-header__username">{user.username}</h3>
              <footer className="profile-header__footer">
                <i className="fas fa-user-plus profile-header__join" />
                {user.join_date}
              </footer>
              <footer className="profile-header__footer">
                <i className="fas fa-comment profile-header__comment" /><strong>{user.comment_count}</strong> Comment{plural}
              </footer>
            </div>
          </section>
        </header>
        {displayProfile}
      </React.Fragment>
    );
  }
}

export default UserProfile;
