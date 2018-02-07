import React from 'react';
import { connect } from 'react-redux';
import {
  createComment,
  removeComment,
  clearCommentErrors,
} from '../../actions/comment_actions';
import CommentList from './comment_list';

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments),
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  removeComment: id => dispatch(removeComment(id)),
  clearErrors: () => dispatch(clearCommentErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);