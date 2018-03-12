import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeStep from './recipe_step';
import CommentListContainer from '../../comment/comment_list_container';
import LoadingRecipes from '../../loading_recipes';


class RecipeItemDetail extends Component {
  constructor(props) {
    super(props);
    
    this.formatYoutubeEmbed = this.formatYoutubeEmbed.bind(this);
  }
  
  componentDidMount() {
    this.props.requestRecipe(this.props.match.params.recipeId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recipeId !== nextProps.match.params.recipeId) {
      this.props.requestRecipe(nextProps.match.params.recipeId);
    }
  }

  formatYoutubeEmbed() {
    const regEx = "^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?\.com|youtu\.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)";
    const match = this.props.recipe.recipe_video_url.match(regEx);

    return match ? match[1] : '';
  }

  displayVideo() {
    if (this.props.recipe.recipe_video_url) {
      const youTubeId = this.formatYoutubeEmbed();
      return (
        <div>
          <iframe width="640" 
            height="390" 
            src={`https://www.youtube.com/embed/${youTubeId}`} 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  }

  displaySteps() {
    if (this.props.steps.length) {
      let sortedSteps = this.sortSteps(this.props.steps);

      return sortedSteps.map((step, idx) => 
        <RecipeStep key={step.id} step={step} stepNum={idx + 1} />
      );
    }
  }

  sortSteps(steps) {
    return steps.sort((step, nextStep) => step.order - nextStep.order);
  }

  render() {
    if (this.props.isLoadingRecipe || !this.props.recipe) {
      return <LoadingRecipes />;
    }

    const recipe = this.props.recipe;
    const author = this.props.authors[recipe.author_id].username;
    const authorId = this.props.authors[recipe.author_id].id;

    return (
      <article className="detail">
        <header className="detail__header">
          <h2 className="detail__title">{recipe.title}</h2>
          <h4 className="detail__author">
            By: <span className="detail__author-name"><Link to={`/users/${authorId}/`}>{author}</Link></span>
          </h4>
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
        <CommentListContainer 
          recipeId={recipe.id} 
          history={this.props.history} 
          authorId={recipe.author_id}
        />
      </article>
    );
  }
}

export default RecipeItemDetail;