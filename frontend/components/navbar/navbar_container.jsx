import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logoutUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }, { history }) => ({
  currentUser: session.currentUser,
  history
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));