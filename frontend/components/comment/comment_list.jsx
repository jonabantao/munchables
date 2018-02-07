import React, { Component } from 'react';
import CommentListItem from './comment_list_item';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isNewCommentOpen: false,
    };

    this.displayCommentsHeader = this.displayCommentsHeader.bind(this);
    this.displayNewCommentForm = this.displayNewCommentForm.bind(this);
    this.displayComments = this.displayComments.bind(this);
  }

  componentDidMount() {
    if (!this.props.comments.length) {
      this.setState({ isNewCommentOpen: true });
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

  displayNewCommentForm() {
    if (this.state.isNewCommentOpen) {
      // Display new comment form
    }
  }

  displayComments() {
    if (this.props.comments.length) {
      let allComments = this.props.comments.map(comment => (
        <CommentListItem 
          key={comment.id} 
          comment={comment} 
          author={comment.commenter_name}
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
    console.log(this.state);
    return (
      <section className="comments-list">
        <h3 className="comments-list__title">
          {this.displayCommentsHeader()}
        </h3>
        {this.displayComments()}
      </section>
    );
  }
}

export default CommentsList;