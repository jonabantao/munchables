import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './recipe_form';
import { 
  createRecipe, 
  updateRecipe, 
  requestRecipe,
} from '../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === "/recipes/new" ? "new" : "edit";

  let propState = {
    formType,
    ownProps,
    steps: state.entities.steps,
  };

  if (formType === "edit") {
    propState.recipe = state.entities.recipes[ownProps.match.params.recipeId];
  }

  return propState;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createRecipe: recipe => dispatch(createRecipe(recipe)),
  updateRecipe: (recipe, recipeId) => dispatch(updateRecipe(recipe, recipeId)),
  requestRecipe: id => dispatch(requestRecipe(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);