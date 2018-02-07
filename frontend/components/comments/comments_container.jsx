import React from 'react';
import { connect } from 'react-redux';
import {
  createComment,
  removeComment,
  clearCommentErrors,
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  removeComment: id => dispatch(removeComment(id)),
  clearErrors: () => dispatch(clearCommentErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeItemDetail);