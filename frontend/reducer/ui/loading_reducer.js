import {
  START_LOADING_RECIPES,
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE,
} from '../../actions/recipe_actions';
import _ from 'lodash';

const initState = {
  recipeLoading: false,
  commentLoading: false,
};

const loadingReducer = (state = initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_RECIPES:
      return _.merge({}, state, { recipeLoading: true });
    case RECEIVE_ALL_RECIPES:
    case RECEIVE_RECIPE:
      return _.merge({}, state, { recipeLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;