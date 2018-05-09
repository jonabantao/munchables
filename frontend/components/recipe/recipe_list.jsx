import React, { Component } from 'react';
import RecipeItem from './recipe_item';
import LoadingRecipes from '../loading_recipes';

class RecipeList extends Component {
  componentDidMount() {
    this.props.requestAllRecipes();
  }

  createRecipeContainers(recipes) {
    if (recipes.length) {
      return recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          authorName={this.props.authors[recipe.author_id].username}
          authorId={recipe.author_id}
        />
      ));
    }
  }

  render() {
    if (this.props.isLoadingRecipe) {
      return <LoadingRecipes />;
    }

    return (
      <nav className="recipe-list">
        <section className="recipe-list__heading">
          <i className="fas fa-utensils recipe-list__icon" />
          <h3 className="recipe-list__header-text">Recipes</h3>
        </section>
        <ul className="recipe-list__contents">
          {this.createRecipeContainers(this.props.recipes)}
        </ul>
      </nav>
    );
  }
}

export default RecipeList;
