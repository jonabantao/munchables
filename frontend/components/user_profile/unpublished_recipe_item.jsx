import React from 'react';
import { Link } from 'react-router-dom';

const unpublishedRecipeItem = ({ recipeId, imageUrl, title }) => {
  return (
    <li className="profile-recipes__list-item">
      <Link to={`/recipes/${recipeId}/edit`}>
        <section className="profile-recipes__img-container">
          <img src="https://via.placeholder.com/250x225px"
            className="profile-recipes__img-placeholder"
            alt="recipe-item-img" />
          <img src={imageUrl}
            className="profile-recipes__item-img"
            alt="recipe-item-img" />
        </section>
        <section className="profile-recipes__title-container">
          <h4 className="profile-recipes__title-text">{title}</h4>
        </section>
      </Link>
    </li>
  );
};

export default unpublishedRecipeItem;