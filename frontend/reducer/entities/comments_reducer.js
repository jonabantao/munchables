import {
  RECEIVE_COMMENT,
  DELETE_COMMENT
} from '../../actions/comment_actions';
import {
  RECEIVE_RECIPE
} from '../../actions/recipe_actions';
import _ from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    case RECEIVE_COMMENT:
      return _.merge({}, state, action.comment);
    case RECEIVE_RECIPE:
      return _.merge({}, action.payload.comments);
    case DELETE_COMMENT:
      newState = _.merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;