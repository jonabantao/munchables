import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE,
  RECEIVE_FILTERED_RECIPES,
} from '../../actions/recipe_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import _ from 'lodash';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
    case RECEIVE_FILTERED_RECIPES:
    case RECEIVE_USER:
      return _.merge({}, action.payload.recipes);
    case RECEIVE_RECIPE:
      newState[action.payload.recipe.id] = action.payload.recipe;
      return _.merge({}, state, newState);
    default:
      return state;
  }
};

export default recipesReducer;