import React, { Component } from 'react';
import StepFormContainer from './step/step_form_container';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      title: '',
      recipe_video_url: '',
      imageFile: null,
      imageUrl: null,
    };

    this.uploadImage = this.uploadImage.bind(this);
    this.handleInitialSubmit = this.handleInitialSubmit.bind(this);
    this.handlePublishSubmit = this.handlePublishSubmit.bind(this);
    this.updateEditedState = this.updateEditedState.bind(this);
    this.checkValidYouTubeUrl = this.checkValidYouTubeUrl.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.requestRecipe(this.props.ownProps.match.params.recipeId)
        .then((recipe) => {
          if (recipe.author_id === this.props.currentUser.id) {
            return this.updateEditedState();
          }

          return this.props.history.replace('/');
        });
    }
  }

  componentWillReceiveProps() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }

    return null;
  }

  updateEditedState() {
    const recipeVideoUrl = this.props.recipe.recipe_video_url ?
      this.props.recipe.recipe_video_url : '';

    this.setState({
      body: this.props.recipe.body,
      title: this.props.recipe.title,
      recipe_video_url: recipeVideoUrl,
    });
  }

  uploadImage(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  update(propType) {
    return e => this.setState({ [propType]: e.target.value });
  }

  checkValidYouTubeUrl() {
    const regEx = '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?\.com|youtu\.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)';
    const match = this.state.recipe_video_url.match(regEx);

    return match ? this.state.recipe_video_url : '';
  }

  handleInitialSubmit(e) {
    e.preventDefault();

    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append('recipe[body]', this.state.body);
    formData.append('recipe[title]', this.state.title);
    formData.append('recipe[recipe_video_url]', this.checkValidYouTubeUrl());
    if (file) {
      formData.append('recipe[recipe_img]', this.state.imageFile);
    }

    this.props.createRecipe(formData)
      .then(newRecipe => (
        this.props.history.replace(`/recipes/${newRecipe.recipe.id}/edit`)));
  }

  handlePublishSubmit(e) {
    e.preventDefault();

    const file = this.state.imageFile;
    const { recipeId } = this.props.match.params;
    const formData = new FormData();
    formData.append('recipe[body]', this.state.body);
    formData.append('recipe[title]', this.state.title);
    formData.append('recipe[recipe_video_url]', this.checkValidYouTubeUrl());

    if (file) {
      formData.append('recipe[recipe_img]', this.state.imageFile);
    }
    formData.append('recipe[published]', true);

    this.props.updateRecipe(formData, recipeId)
      .then(() => this.props.history.push(`/recipes/${recipeId}`));
  }

  displayImage() {
    if (this.props.formType === 'edit' && this.state.imageFile === null && this.props.recipe) {
      return (
        <img
          alt="recipe"
          src={`${this.props.recipe.recipe_img_url}`}
          className="recipe-form__img-main"
        />
      );
    } else if (this.state.imageUrl) {
      return (
        <img
          alt="recipe"
          src={`${this.state.imageUrl}`}
          className="recipe-form__img-main"
        />
      );
    }

    return (
      <h3 className="recipe-form__img-upload-text">
        <i className="fas fa-plus" />Click To Add Title Image
      </h3>
    );
  }

  displayBeginStepAddButton() {
    if (this.props.formType === 'new') {
      return (
        <button
          className="recipe-form__button"
          onClick={this.handleInitialSubmit}
        >
          Start Writing Steps
        </button>
      );
    }

    return null;
  }

  displayPublishButton() {
    if (this.props.formType === 'edit') {
      return (
        <button
          className="recipe-form__button"
          onClick={this.handlePublishSubmit}
        >
          Publish Munchable
        </button>
      );
    }

    return null;
  }

  displayStepContainer() {
    if (this.props.formType === 'edit') {
      return (
        <StepFormContainer
          recipeId={this.props.match.params.recipeId}
          steps={this.props.steps}
        />
      );
    }

    return null;
  }

  displayErrors() {
    if (this.props.errors.length) {
      const errorListItem = this.props.errors
        .map(err => <li key={err} className="recipe-form__error">{err}</li>);

      return (
        <ul className="recipe-form__errors-container">
          {errorListItem}
        </ul>
      );
    }

    return null;
  }

  render() {
    const formHeader = this.props.formType === 'edit' ? 'Edit Munchable' : 'Create a Munchable';

    return (
      <section className="recipe-form-page">
        <div className="recipe-form">
          <header className="recipe-form__header">
            <h2 className="recipe-form__header-title">
              {formHeader}
            </h2>
          </header>
          <section className="recipe-form__input-container">
            <label htmlFor="recipeform-img-upload" className="recipe-form__img-upload">
              <div className="recipe-form__img-container">
                <input
                  id="recipeform-img-upload"
                  type="file"
                  className="recipe-form__img-input"
                  onChange={this.uploadImage}
                />
                {this.displayImage()}
              </div>
            </label>
            <div className="recipeform__title-subform">
              <label htmlFor="recipeform-title" className="recipe-form__intro-label">Title:<br />
                <input
                  id="recipe-form-title"
                  type="text"
                  value={this.state.title}
                  className="recipe-form__textinput"
                  placeholder="Munchable Title"
                  onChange={this.update('title')}
                />
              </label>
              <label htmlFor="recipeform-video-url" className="recipe-form__intro-label">Video URL:<br />
                <input

                  type="text"
                  value={this.state.recipe_video_url}
                  className="recipe-form__textinput"
                  placeholder="Youtube URLs Only"
                  onChange={this.update('recipe_video_url')}
                />
              </label>
              <label htmlFor="recipeform-summary" className="recipe-form__intro-label">Intro:<br />
                <textarea
                  id="recipeform-summary"
                  className="recipe-form__textarea"
                  value={this.state.body}
                  placeholder="Brief summary of your Munchable"
                  onChange={this.update('body')}
                />
              </label>
            </div>
          </section>
        </div>
        {this.displayStepContainer()}
        {this.displayErrors()}
        {this.displayBeginStepAddButton()}
        {this.displayPublishButton()}
      </section>
    );
  }
}

export default RecipeForm;
