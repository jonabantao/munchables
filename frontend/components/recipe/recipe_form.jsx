import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage(e) {
    let file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      }).bind(this);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <main className="recipe-form-page">
        <section className="recipe-form">
          <section className="recipe-form__title-window">
            <section
              className="recipe-form__img_container"
              onClick={this.uploadImage}
            >
            </section>
            <section className="recipe-form__title-subform">
              <label className="recipe-form__title-label">Title:
                  <input type="text" value="fksakfsa" className="recipe-form__textinput" />
              </label>
              <label className="recipe-form__intro-label">Intro:<br />
                <textarea
                  className="recipe-form__textarea">
                </textarea>
                <br />
                <button className="te">Publish Munchable</button>
              </label>
            </section>
          </section>
        </section>
      </main>
    );
  }
}

export default RecipeForm;