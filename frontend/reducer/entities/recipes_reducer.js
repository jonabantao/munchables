import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE
} from '../../actions/recipe_actions';
import _ from 'lodash';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.payload.recipes;
    case RECEIVE_RECIPE:
      newState[action.payload.recipe.id] = action.payload.recipe;
      return _.merge({}, state, newState);
    default:
      return state;
  }
};

export default recipesReducer;