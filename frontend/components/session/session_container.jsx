import React from 'react';
import { connect } from 'react-redux';

import { 
  createUser, 
  loginUser, 
  clearErrors,
  loginGuest,
} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }, { location }) => {
  const formType = location.pathname === "/signup" ? "signup" : "login";

  return {
    errors: errors.session,
    formType
  }; 
};

const mapDispatchToProps = (dispatch, { location }) => {
  const isSignupPage = location.pathname === "/signup";
  const handleSession = isSignupPage ? createUser : loginUser;

  return {
    handleSession: user => dispatch(handleSession(user)),
    clearErrors: err => dispatch(clearErrors()),
    loginGuest: () => dispatch(loginGuest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);