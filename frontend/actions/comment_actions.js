import * as APIUtil from '../util/comment_util';
import { RESET_RECIPE_ERRORS } from './recipe_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RESET_COMMENT_ERRORS = "RESET_COMMENT_ERRORS";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
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
    .then(newComment => dispatch(receiveComment(comment)),
          err => dispatch(receiveCommentErrors(err))
    )
);

export const fetchComment = commentId => dispatch => (
  APIUtil.fetchComment(commentId)
    .then(fetchedComment => dispatch(receiveComment(fetchedComment)))
);

export const removeComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(() => dispatch(deleteComment(commentId)))
);

export const clearCommentErrors = () => dispatch => (
  dispatch(resetCommentErrors())
);