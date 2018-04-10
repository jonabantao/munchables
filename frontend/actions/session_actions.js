import * as APIUtil from '../util/session_api_util';
import { randomGuest } from '../util/guest_login_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const resetErrors = () => ({
  type: RESET_SESSION_ERRORS,
});

export const createUser = user => dispatch => (
  APIUtil.createUser(user)
    .then(
      newUser => dispatch(receiveCurrentUser(newUser)),
      err => dispatch(receiveSessionErrors(err.responseJSON)),
    )
);

export const loginUser = user => dispatch => (
  APIUtil.loginUser(user)
    .then(
      loggedUser => dispatch(receiveCurrentUser(loggedUser)),
      err => dispatch(receiveSessionErrors(err.responseJSON)),
    )
);

export const logoutUser = () => dispatch => (
  APIUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
);

export const loginGuest = () => dispatch => (
  APIUtil.loginUser(randomGuest())
    .then(guestUser => dispatch(receiveCurrentUser(guestUser)))
);

export const clearErrors = () => dispatch => dispatch(resetErrors());
