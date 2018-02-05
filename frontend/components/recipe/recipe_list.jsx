import React, { Component } from 'react';
import RecipeItem from './recipe_item';

class RecipeList extends Component {
  componentDidMount() {
    this.props.requestAllRecipes();
  }

  createRecipeContainers(recipes) {
    if (recipes.length) {
      return recipes.map(recipe => <RecipeItem 
        key={recipe.id} 
        recipe={recipe}
        authorName={this.props.authors[recipe.author_id].username} 
      />);
    } else {
      return <h1>Loading...</h1>;
    }
  }

  render() {
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