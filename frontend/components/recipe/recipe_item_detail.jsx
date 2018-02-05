import React, { Component } from 'react';

class RecipeItemDetail extends Component {
  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
  }

  render() {
    console.log(this.props.recipe);
    return (
      <div className="temp">
        <h1>PLACEHOLDER PAGE</h1>
        <p>{this.props.recipe ? this.props.recipe.title : null}</p>
        <p>{this.props.recipe ? this.props.recipe.body : null}</p>
        <p></p>
      </div>
    );
  }
}

export default RecipeItemDetail;