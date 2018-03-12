import React from 'react';
import PublishedRecipeItem from './published_recipe_item';

const PublicProfile = ({ user, recipes }) => {
  if (!recipes.length) {
    return (
      <section className="profile-recipes-container">
        <nav className="profile-recipes">
          <h3 className="profile-recipes__header">
          {user.username} has not published any munchables... yet.
          </h3>
        </nav>
      </section>
    );
  }

  const publishedRecipes = recipes.map(recipe => 
    <PublishedRecipeItem
      key={recipe.id}
      recipeId={recipe.id}
      title={recipe.title}
      imageUrl={recipe.recipe_img_url}
    />
  );

  return (
    <section className="profile-recipes-container">
      <nav className="profile-recipes">
        <h3 className="profile-recipes__header">
          {`${user.username}'s published munchables`.toUpperCase()}
        </h3>
        <ul className="profile-recipes__list">
          {publishedRecipes}
        </ul>
      </nav>
    </section>
  );
};

export default PublicProfile;