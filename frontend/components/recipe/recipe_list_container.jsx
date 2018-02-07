import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeList from './recipe_list';
import { requestAllRecipes, requestRecipe } from '../../actions/recipe_actions';

const mapStateToProps = ({ entities }) => ({
  recipes: Object.values(entities.recipes),
  authors: entities.users,
});

const mapDispatchToProps = (dispatch) => ({
  requestAllRecipes: () => dispatch(requestAllRecipes()),
  requestRecipe: id => dispatch(requestRecipe(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);