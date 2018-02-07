import React, { Component } from 'react';
import CommentListItem from './comment_list_item';
import CommentForm from './comment_form';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isNewCommentOpen: false,
    };

    this.displayCommentsHeader = this.displayCommentsHeader.bind(this);
    this.displayCommentForm = this.displayCommentForm.bind(this);
    this.displayComments = this.displayComments.bind(this);
  }

  componentDidMount() {
    if (!this.props.comments.length) {
      this.setState({ isNewCommentOpen: true });
    }

    this.props.fetchRecipeComments();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.recipeId !== this.props.recipeId) {
      this.props.fetchRecipeComments();
    }
  }

  openCommentForm() {
    this.setState({ isNewCommentOpen: false });
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
    if (this.state.isNewCommentOpen) {
      return <CommentForm recipeId={this.props.recipeId} />;
    }
  }

  displayComments() {
    if (this.props.comments.length) {
      let allComments = this.props.comments.map(comment => (
        <CommentListItem 
          key={comment.id} 
          comment={comment}
          commenter={this.props.users[comment.commenter_id]}
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
          disabled={!this.state.isNewCommentOpen}
          onClick={this.openCommentForm}
        >
          test
        </button>
      </section>
    );
  }
}

export default CommentsList;