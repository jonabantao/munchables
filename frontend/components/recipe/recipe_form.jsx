import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      imageFile: null,
      imageUrl: null,
    };
  }

  getInitialState() {
    return ({
      body: '',
      imageFile: null,
      imageUrl: null,
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
    return e => this.setState({ [propType]: e.target });
  }

  displayImage() {
    return this.state.imageUrl ? 
      <img src={`${this.state.imageUrl}`} className="recipe-form__img-main"/> : 
      <h3 className="recipe-form__img-upload-text">
        <i className="fas fa-plus"></i> Click To Add Title Image
      </h3>;
  }

  render() {
    console.log(this.state);
    return (
      <section className="recipe-form-page">
        <div className="recipe-form">
          <div className="recipe-form__title-window">
            <label className="recipe-form__img-upload">
            <input
              type="file"
              className="recipe-form__img-input"
              onChange={this.uploadImage}
            />
            {this.displayImage()}
            </label>
            <div className="recipe-form__title-subform">
              <label className="recipe-form__title-label">Title:
                  <input type="text" 
                  value="" 
                  className="recipe-form__textinput"
                  placeholder="Your Munchable titlesan"
                  />
              </label>
              <label className="recipe-form__intro-label">Intro:<br />
                <textarea
                  className="recipe-form__textarea">
                </textarea>
                <br />
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