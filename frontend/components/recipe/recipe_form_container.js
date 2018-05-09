import { connect } from 'react-redux';
import RecipeForm from './recipe_form';
import {
  createRecipe,
  updateRecipe,
  requestRecipe,
  clearRecipeErrors,
} from '../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === '/recipes/new' ? 'new' : 'edit';

  const propState = {
    formType,
    ownProps,
    steps: state.entities.steps,
    errors: state.errors.recipe,
    currentUser: state.session.currentUser,
  };

  if (formType === 'edit') {
    propState.recipe = state.entities.recipes[ownProps.match.params.recipeId];
  }

  return propState;
};

const mapDispatchToProps = dispatch => ({
  createRecipe: recipe => dispatch(createRecipe(recipe)),
  updateRecipe: (recipe, recipeId) => dispatch(updateRecipe(recipe, recipeId)),
  requestRecipe: id => dispatch(requestRecipe(id)),
  clearErrors: () => dispatch(clearRecipeErrors()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeForm);
