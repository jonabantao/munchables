import React, { Component } from 'react';
import _ from 'lodash';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };

    this.displayError = this.displayError.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { recipeId } = this.props;

    const commentBody = _.merge({}, this.state, { recipe_id: recipeId });
    this.props.createComment(commentBody)
      .then(() => {
        if (this.props.errors.length) {
          this.props.clearErrors();
        }
      });
  }

  displayError() {
    if (this.props.errors.length) {
      return (
        <div className="comment-error">
          <p className="comment-error__txt">
            Please fill out the comment.
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="comment-form">
        <div className="comment-form__top">
          <div className="comments-list__commenter-img-container">
            <div className="comments-list__img-wrapper comments-list__img-wrapper--shift-down">
              <img
                src={this.props.currentUser.profile_img_url}
                alt="profile"
                className="comments-list__commenter-img"
              />
            </div>
          </div>
          <div className="comment-form__textfield-container">
            <textarea
              placeholder="Post your comment!"
              className="comment-form__textfield"
              onChange={e => this.updateBody(e)}
            />
          </div>
        </div>
        <div className="comment-form__bottom">
          {this.displayError()}
          <button
            className="comment-form__post-button"
            onClick={e => this.handleSubmit(e)}
          >
            Post
          </button>
        </div>
      </section>
    );
  }
}

export default CommentForm;
