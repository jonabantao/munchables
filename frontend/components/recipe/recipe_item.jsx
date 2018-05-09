import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = props => (
  <li className="recipe-list__item">
    <Link to={`/recipes/${props.recipe.id}`}>
      <section className="recipe-list__item-img-container">
        <img
          src="https://via.placeholder.com/325x250"
          className="recipe-list__item-placeholder"
          alt="recipe-item-img"
        />
        <img
          src={props.recipe.recipe_img_url}
          className="recipe-list__item-img"
          alt="recipe-item-img"
        />
      </section>
    </Link>
    <section className="recipe-list__title-container">
      <Link to={`/recipes/${props.recipe.id}`}>
        <h4 className="recipe-list__title-text">{props.recipe.title}</h4>
      </Link>
      <p className="recipe-list__author-text">by&nbsp;
        <Link to={`/users/${props.authorId}`} className="recipe-list__author-link">
            {props.authorName}
        </Link>
      </p>
    </section>
  </li>
);

export default RecipeItem;