import { connect } from 'react-redux';

import RecipeItemDetail from './recipe_item_detail';
import { requestRecipe } from '../../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => ({
  recipeId: ownProps.match.params.recipeId,
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  authors: state.entities.users,
  steps: Object.values(state.entities.steps),
  isLoadingRecipe: state.ui.loading.recipeLoading,
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: id => dispatch(requestRecipe(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeItemDetail);
