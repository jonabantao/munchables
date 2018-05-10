import React from 'react';
import { Link } from 'react-router-dom';
import PublishedRecipeItem from './published_recipe_item';
import UnpublishedRecipeItem from './unpublished_recipe_item';

const PersonalProfile = ({ pubRecipes, unpubRecipes }) => {
  if (!pubRecipes.length && !unpubRecipes.length) {
    return (
      <section className="profile-recipes-container">
        <nav className="profile-recipes">
          <h3 className="profile-recipes__header">
            You haven&apos;t started writing a Munchable yet.
          </h3>
          <Link to="/recipes/new" className="profile-recipes__new-recipe">
            Create One!
          </Link>
        </nav>
      </section>
    );
  }

  const publishedRecipes = pubRecipes.map(recipe => (
    <PublishedRecipeItem
      key={recipe.id}
      recipeId={recipe.id}
      title={recipe.title}
      imageUrl={recipe.recipe_img_url}
    />
  ));

  const unpublishedRecipes = unpubRecipes.map(recipe => (
    <UnpublishedRecipeItem
      key={recipe.id}
      recipeId={recipe.id}
      title={recipe.title}
      imageUrl={recipe.recipe_img_url}
    />
  ));

  const displayUnpublished = unpubRecipes.length ? (
    <nav className="profile-recipes">
      <h3 className="profile-recipes__header">
        YOUR UNPUBLISHED MUNCHABLES
      </h3>
      <ul className="profile-recipes__list">
        {unpublishedRecipes}
      </ul>
    </nav>
  ) : '';

  const displayPublished = pubRecipes.length ? (
    <nav className="profile-recipes">
      <h3 className="profile-recipes__header">
        YOUR PUBLISHED MUNCHABLES
      </h3>
      <ul className="profile-recipes__list">
        {publishedRecipes}
      </ul>
    </nav>
  ) : '';

  return (
    <section className="profile-recipes-container">
      {displayUnpublished}
      {displayPublished}
    </section>
  );
};

export default PersonalProfile;