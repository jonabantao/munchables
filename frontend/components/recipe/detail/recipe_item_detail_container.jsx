import React from 'react';
import { connect } from 'react-redux';
import RecipeItemDetail from './recipe_item_detail';
import {
  requestRecipe
} from '../../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => {
  const recipe = state.entities.recipes[ownProps.match.params.recipeId];

  return {
    recipe,
    authors: state.entities.users,
    steps: Object.values(state.entities.steps),
    recipeId: ownProps.match.params.recipeId,
    history: ownProps.history,
  };
};

const mapDispatchToProps = dispatch => ({
  requestRecipe: id => dispatch(requestRecipe(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeItemDetail);