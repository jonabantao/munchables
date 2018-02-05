import React from 'react';

const RecipeItem = (props) => {
  return (
    <li className="recipe-list__item">
      <section className="recipe-list__item-img-container">
        <img src="http://via.placeholder.com/325x250"
          className="recipe-list__item-placeholder"
          alt="recipe-item-img" />
        <img src={props.recipe.recipe_img_url}
          className="recipe-list__item-img"
          alt="recipe-item-img" />
      </section>
      <section className="recipe-list__title-container">
        <h4>{props.recipe.title}</h4>
        <p>by {props.authorName}</p>
      </section>
    </li>
  );
};

export default RecipeItem;