import {
  START_LOADING_RECIPES,
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE,
} from '../../actions/recipe_actions';
import {
  START_LOADING_COMMENTS,
  RECEIVE_COMMENTS,
} from '../../actions/comment_actions';
import {
  RECEIVE_USER,
  START_LOADING_USER,
} from '../../actions/user_actions';
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
    case START_LOADING_COMMENTS:
      return _.merge({}, state, { commentLoading: true });
    case RECEIVE_COMMENTS:
      return _.merge({}, state, { commentLoading: false });
    case START_LOADING_USER:
      return _.merge({}, state, { userLoading: true });
    case RECEIVE_USER:
      return _.merge({}, state, { userLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;