import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE
} from '../../actions/recipe_actions';
import _ from 'lodash';

const authorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.payload.authors;
    case RECEIVE_RECIPE:
      newState[action.payload.author.id] = action.payload.author;
      return _.merge({}, state, newState);
    default:
      return state;
  }
};

export default authorsReducer;