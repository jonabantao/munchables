import React, { Component } from 'react';

import CommentListItem from './comment_list_item';
import CommentForm from './comment_form';
import LoadingComments from '../loading/loading_comments';

class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCommentFormOpen: false,
    };

    this.displayCommentsHeader = this.displayCommentsHeader.bind(this);
    this.displayCommentForm = this.displayCommentForm.bind(this);
    this.displayComments = this.displayComments.bind(this);
    this.toggleCommentForm = this.toggleCommentForm.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setWrapper = this.setWrapper.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipeComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recipeId !== this.props.recipeId) {
      this.props.fetchRecipeComments();
    }
    if (prevProps.comments.length !== this.props.comments.length) {
      document.removeEventListener('click', this.handleOutsideClick, false);
      this.setState({ isCommentFormOpen: false });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  setWrapper(node) {
    this.node = node;
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleCommentForm(e);
  }

  toggleCommentForm(e) {
    e.preventDefault();

    if (!this.props.currentUser) {
      this.props.history.push('/login');
    } else if (!this.state.isCommentFormOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isCommentFormOpen: !prevState.isCommentFormOpen,
    }));
  }

  displayCommentsHeader() {
    const { length } = this.props.comments;

    if (length) {
      const addS = length > 1 ? 's' : '';
      return `${length} Comment${addS}`;
    }

    return 'No comments yet.';
  }

  displayCommentForm() {
    if (this.state.isCommentFormOpen) {
      return (
        <CommentForm
          recipeId={this.props.recipeId}
          currentUser={this.props.currentUser}
          createComment={this.props.createComment}
          clearErrors={this.props.clearErrors}
          errors={this.props.errors}
        />
      );
    }

    return null;
  }

  displayComments() {
    if (this.props.comments.length) {
      let allComments = this.props.comments.map(comment => (
        <CommentListItem
          key={comment.id}
          comment={comment}
          commenter={this.props.users[comment.commenter_id]}
          authorId={this.props.authorId}
          removeComment={this.props.removeComment}
          currentUser={this.props.currentUser}
        />
      ));

      return (
        <ul className="comment-list__contents">
          {allComments}
        </ul>
      );
    }

    return null;
  }

  render() {
    if (this.props.isLoadingComments) {
      return <LoadingComments />;
    }

    return (
      <section className="comments-list">
        <h3 className="comments-list__title">
          {this.displayCommentsHeader()}
        </h3>
        {this.displayComments()}
        <div className="comments-list__click-wrapper" ref={this.setWrapper}>
          <button
            className="comments-list__open-form-button"
            disabled={this.state.isCommentFormOpen}
            onClick={this.toggleCommentForm}
          >
            Post Comment
          </button>
          {this.displayCommentForm()}
        </div>
      </section>
    );
  }
}

export default CommentsList;
