import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      title: '',
      imageFile: null,
      imageUrl: null,
      hasPressedBegun: false,
    };

    this.uploadImage = this.uploadImage.bind(this);
    this.handleInitialSubmit = this.handleInitialSubmit.bind(this);

    this.recipeId = null;
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
    
    console.log(formData);
    this.props.createRecipe(formData)
      .then(newRecipe => {
        this.recipeId = newRecipe.recipe.id;
        this.setState({ hasPressedBegun: true });
      });
  } 

  displayImage() {
    return this.state.imageUrl ? 
      <img src={`${this.state.imageUrl}`} className="recipe-form__img-main"/> : 
      <h3 className="recipe-form__img-upload-text">
        <i className="fas fa-plus"></i> Click To Add Title Image
      </h3>;
  }

  displayBeginStepAddButton() {
    if (!this.state.hasPressedBegun) {
      return  <button 
                className="recipe-form__button"
                onClick={this.handleInitialSubmit}
              >
               Start Writing Steps
              </button>;
    }
  }

  render() {
    console.log(this.state);
    console.log(this.recipeId);
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
              <label className="recipe-form__intro-label">Intro:<br />
                <textarea
                  className="recipe-form__textarea"
                  value={this.state.body}
                  placeholder="Brief summary of your Munchable"
                  onChange={this.update('body')}
                />
                {this.displayBeginStepAddButton()}
                <button className="recipe-form__button">Publish Munchable</button>
              </label>
            </div>
          </div>
        </div>
        <button className="recipe-form__add-step-button">Add Step</button>
      </section>
    );
  }
}

export default RecipeForm;