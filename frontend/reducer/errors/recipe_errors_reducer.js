import _ from 'lodash';

import {
  RECEIVE_RECIPE_ERRORS,
  RESET_RECIPE_ERRORS,
  RECEIVE_RECIPE,
} from '../../actions/recipe_actions';

const recipeErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RECIPE_ERRORS:
      return _.merge([], action.errors);
    case RECEIVE_RECIPE:
    case RESET_RECIPE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default recipeErrorsReducer;
