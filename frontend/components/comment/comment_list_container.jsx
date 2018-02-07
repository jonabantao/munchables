import React from 'react';
import { connect } from 'react-redux';
import {
  createComment,
  fetchRecipeComments,
  removeComment,
  clearCommentErrors,
} from '../../actions/comment_actions';
import CommentList from './comment_list';

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.entities.comments),
  users: state.entities.users,
  recipeId: ownProps.recipeId,
  currentUser: state.session.currentUser,
  history: ownProps.history,
});

const mapDispatchToProps = (dispatch, { recipeId }) => ({
  fetchRecipeComments: () => dispatch(fetchRecipeComments(recipeId)),
  createComment: comment => dispatch(createComment(comment)),
  removeComment: id => dispatch(removeComment(id)),
  clearErrors: () => dispatch(clearCommentErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);