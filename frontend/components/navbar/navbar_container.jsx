import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);