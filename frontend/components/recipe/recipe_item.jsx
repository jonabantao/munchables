import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = (props) => {
  return (
    <li className="recipe-list__item">
      <Link to={`/recipes/${props.recipe.id}`}>
        <section className="recipe-list__item-img-container">
          <img src="http://via.placeholder.com/325x250"
            className="recipe-list__item-placeholder"
            alt="recipe-item-img" />
          <img src={props.recipe.recipe_img_url}
            className="recipe-list__item-img"
            alt="recipe-item-img" />
        </section>
        <section className="recipe-list__title-container">
          <h4 className="recipe-list__title-text">{props.recipe.title}</h4>
          <p className="recipe-list__author-text">by&nbsp;
            <Link to={`/users/${props.authorId}`} className="recipe-list__author-link">
               {props.authorName}
            </Link>
          </p>
        </section>
      </Link>
    </li>
  );
};

export default RecipeItem;