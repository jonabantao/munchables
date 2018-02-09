import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  DELETE_COMMENT
} from '../../actions/comment_actions';
import _ from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    case RECEIVE_COMMENTS:
      return _.merge({}, action.payload.comments);
    case RECEIVE_COMMENT:
      return _.merge({}, state, action.payload.comment);
    case DELETE_COMMENT:
      newState = _.merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;