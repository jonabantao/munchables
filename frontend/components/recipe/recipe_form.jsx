import React, { Component } from 'react';

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
  }

  componentWillMount() {
    if (this.props.formType === "edit") {
      this.props.requestRecipe(this.props.ownProps.match.params.recipeId)
        .then(() => this.updateEditedState());
    }
  }

  updateEditedState() {
    this.setState({
      body: this.props.recipe.body,
      title: this.props.recipe.title,
      recipe_video_url: this.props.recipe.recipe_video_url,
    });
  }

  uploadImage(e) {
    let file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  update(propType) {
    return e => this.setState({ [propType]: e.target.value });
  }

  handleInitialSubmit(e) {
    e.preventDefault();
    
    const file = this.state.imageFile;
    let formData = new FormData();
    formData.append('recipe[body]', this.state.body);
    formData.append('recipe[title]', this.state.title);
    if (file) {
      formData.append('recipe[recipe_img]', this.state.imageFile);
    }
    
    this.props.createRecipe(formData)
      .then(newRecipe => {
        this.props.history.replace(`/recipes/${newRecipe.recipe.id}/edit`);
      }, err => console.log(err));
  }

  handlePublishSubmit(e) {
    e.preventDefault();

    const file = this.state.imageFile;
    let formData = new FormData();
    formData.append('recipe[id]', this.props.match.params.recipeId);
    formData.append('recipe[body]', this.state.body);
    formData.append('recipe[title]', this.state.title);
    if (file) {
      formData.append('recipe[recipe_img]', this.state.imageFile);
    }
    formData.append('recipe[published]', true);

    this.props.updateRecipe(formData);
  }

  displayImage() {
    if (this.props.formType === "edit" && this.state.imageFile === null && this.props.recipe) {
      return <img src={`${this.props.recipe.recipe_img_url}`} 
              className="recipe-form__img-main"/>;
    } else if (this.state.imageUrl) {
      return <img src={`${this.state.imageUrl}`} 
              className="recipe-form__img-main" />;
    } else {
      return (
        <h3 className="recipe-form__img-upload-text">
          <i className="fas fa-plus"></i> Click To Add Title Image
        </h3>
      );
    }
  }

  displayBeginStepAddButton() {
    if (this.props.formType === "new") {
      return  <button 
                className="recipe-form__button"
                onClick={this.handleInitialSubmit}
              >
               Start Writing Steps
              </button>;
    }
  }
  
  displayPublishButton() {
    if (this.props.formType === "edit") {
      return  <button className="recipe-form__button"
                onClick={this.handlePublishSubmit}
              >
                Publish Munchable
              </button>;
    }
  }

  // displayStepContainer() {
  //   if (this.props.formType === "edit") {
  //     return <StepFormContainer recipeId={this.props} />
  //   }
  // }

  render() {
    console.log(this.state);
    return (
      <section className="recipe-form-page">
        <div className="recipe-form">
          <div className="recipe-form__title-window">
            <label className="recipe-form__img-upload">
              <div className="recipe-form__img-container">
                <input
                  type="file"
                  className="recipe-form__img-input"
                  onChange={this.uploadImage}
                />
                {this.displayImage()}
              </div>
            </label>
            <div className="recipe-form__title-subform">
              <label className="recipe-form__title-label">Title:
                  <input type="text" 
                    value={this.state.title} 
                    className="recipe-form__textinput"
                    placeholder="Munchable Title"
                    onChange={this.update('title')}
                  />
              </label>
              <label className="recipe-form__title-label">Video Url:
                  <input type="text" 
                    value={this.state.recipe_video_url} 
                    className="recipe-form__textinput"
                    placeholder="Video Url"
                    onChange={this.update('recipe_video_url')}
                  />
              </label>
              <label className="recipe-form__intro-label">Intro:<br />
                <textarea
                  className="recipe-form__textarea"
                  value={this.state.body}
                  placeholder="Brief summary of your Munchable"
                  onChange={this.update('body')}
                />
                {this.displayBeginStepAddButton()}
              </label>
            </div>
          </div>
        </div>
        {this.displayPublishButton()}
      </section>
    );
  }
}

export default RecipeForm;