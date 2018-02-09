import * as APIUtil from '../util/comment_util';
import { RESET_RECIPE_ERRORS } from './recipe_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RESET_COMMENT_ERRORS = "RESET_COMMENT_ERRORS";
export const START_LOADING_COMMENTS = "START_LOADING_COMMENTS";

const startLoadingComments = () => ({
  type: START_LOADING_COMMENTS,
});

const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload
});

const receiveRecipeComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload,
});

const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

const resetCommentErrors = () => ({
  type: RESET_RECIPE_ERRORS,
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)),
          err => dispatch(receiveCommentErrors(err.responseJSON))
    )
);

export const fetchComment = commentId => dispatch => (
  APIUtil.fetchComment(commentId)
    .then(fetchedComment => dispatch(receiveComment(fetchedComment)))
);

export const fetchRecipeComments = recipeId => dispatch => {
  dispatch(startLoadingComments());
  return APIUtil.fetchComments(recipeId)
    .then(recipeComments => dispatch(receiveRecipeComments(recipeComments)));
};

export const removeComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(() => dispatch(deleteComment(commentId)))
);

export const clearCommentErrors = () => dispatch => (
  dispatch(resetCommentErrors())
);