import _ from 'lodash';

import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_FILTERED_RECIPES,
  RECEIVE_RECIPE,
} from '../../actions/recipe_actions';
import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
} from '../../actions/comment_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
    case RECEIVE_FILTERED_RECIPES:
      return _.merge({}, action.payload.authors);
    case RECEIVE_RECIPE:
      newState[action.payload.author.id] = action.payload.author;
      return _.merge({}, state, newState);
    case RECEIVE_COMMENTS:
      return _.merge({}, state, action.payload.users);
    case RECEIVE_COMMENT:
    case RECEIVE_USER:
      return _.merge({}, state, action.payload.user);
    default:
      return state;
  }
};

export default usersReducer;
