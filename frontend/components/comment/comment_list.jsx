import React, { Component } from 'react';
import CommentListItem from './comment_list_item';
import CommentForm from './comment_form';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isCommentFormOpen: false,
    };

    this.displayCommentsHeader = this.displayCommentsHeader.bind(this);
    this.displayCommentForm = this.displayCommentForm.bind(this);
    this.displayComments = this.displayComments.bind(this);
    this.handleOpenCommentForm = this.handleOpenCommentForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipeComments();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.recipeId !== this.props.recipeId) {
      this.props.fetchRecipeComments();
    }
  }

  openCommentForm() {
    this.setState({ isCommentFormOpen: true });
  }

  handleOpenCommentForm(e) {
    e.preventDefault();

    if (!this.props.currentUser) {
      this.props.history.push("/login");
    } else {
      this.setState({ isCommentFormOpen: true });
    }
  }

  displayCommentsHeader() {
    const length = this.props.comments.length;

    if (length) {
      const addS = length > 1 ? 's' : '';
      return `${length} Comment${addS}`;
    } else {
      return "No comments yet.";
    }
  }

  displayCommentForm() {
    if (this.state.isCommentFormOpen) {
      return (
        <CommentForm 
          recipeId={this.props.recipeId}       
          currentUser={this.props.currentUser}
        />
      ); 
    }
  }

  displayComments() {
    if (this.props.comments.length) {
      let allComments = this.props.comments.map(comment => (
        <CommentListItem 
          key={comment.id} 
          comment={comment}
          commenter={this.props.users[comment.commenter_id]}
          authorId={this.props.authorId}
        />
      ));

      return (
        <ul className="comment-list__contents">
          {allComments}
        </ul>
      );
    }
  }

  render() {
    return (
      <section className="comments-list">
        <h3 className="comments-list__title">
          {this.displayCommentsHeader()}
        </h3>
        {this.displayComments()}
        <button
          className="comments-list__open-form-button"
          disabled={this.state.isCommentFormOpen}
          onClick={this.handleOpenCommentForm}
        >
          Post Comment
        </button>
      </section>
    );
  }
}

export default CommentsList;