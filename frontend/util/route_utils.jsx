import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let propState = {
    loggedIn: Boolean(state.session.currentUser),
    recipes: state.entities.recipes,
    matchParams: ownProps.computedMatch.params,
  };

  if (state.session.currentUser) {
    propState.currentUserId = state.session.currentUser.id;
  }

  return propState;
};

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to={`/login/${path}`} />
    )}
  />
);

const Author = ({ loggedIn, currentUserId, path, component: Component, recipes, matchParams }) => {
  const isAuthor = loggedIn && recipes[matchParams.recipeId].author_id === currentUserId;

  return <Route
    path={path}
    render={props => (
      isAuthor ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AuthorRoute = withRouter(connect(mapStateToProps)(Author));