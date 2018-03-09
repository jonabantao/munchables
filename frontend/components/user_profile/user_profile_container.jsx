import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom'; 

import UserProfile from './user_profile';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities, ui, session }, ownProps) => ({
  recipes: Object.values(entities.recipes),
  user: entities.users[ownProps.match.params.userId],
  isLoadingUser: ui.loading.userLoading,
  userId: ownProps.match.params.userId,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: id => dispatch(requestUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);