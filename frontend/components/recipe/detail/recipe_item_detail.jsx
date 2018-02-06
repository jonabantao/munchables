import React, { Component } from 'react';
import RecipeStep from './recipe_step';

class RecipeItemDetail extends Component {
  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
  }

  displayVideo() {
    if (this.props.recipe.recipe_video_url) {
      return (
        <div>
          <iframe width="420" height="315" src={this.props.recipe.recipe_video_url} frameBorder="0" allowFullScreen></iframe>
        </div>
      );
    }
  }

  displaySteps() {
    if (this.props.steps.length) {
      let sortedSteps = this.sortSteps(this.props.steps);

      return sortedSteps.map(step => 
        <RecipeStep key={step.id} step={step} />
      );
    }
  }

  sortSteps(steps) {
    return steps.sort((step, nextStep) => step.order - nextStep.order);
  }

  render() {
    console.log(this.props.steps);
    if (!this.props.recipe) {
      return <article className="detail">Loading</article>;
    }

    const recipe = this.props.recipe;
    const author = this.props.authors[recipe.author_id].username;

    return (
      <article className="detail">
        <header className="detail__header">
          <h2 className="detail__title">{recipe.title}</h2>
          <h4 className="detail__author">By: {author}</h4>
          <small>Posted: {recipe.creation}</small>
        </header>
        <section className="detail__intro-container">
          {this.displayVideo()}
          <div className="detail__intro-img-container">
            <img src={recipe.recipe_img_url} className="detail__intro-img" />
          </div>
          <div className="detail__step-body">
            <p>
              {recipe.body}
            </p>
          </div>
        </section>
        {this.displaySteps()}
      </article>
    );
  }
}

export default RecipeItemDetail;