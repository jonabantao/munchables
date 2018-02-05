import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './recipe_form';
import { createRecipe, updateRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  createRecipe: recipe => dispatch(createRecipe(recipe)),
  updateRecipe: recipe => dispatch(updateRecipe(recipe))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);