import _ from 'lodash';

import {
  RECEIVE_COMMENT_ERRORS,
  RESET_COMMENT_ERRORS,
  RECEIVE_COMMENT,
} from '../../actions/comment_actions';

const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return _.merge([], action.errors);
    case RECEIVE_COMMENT:
    case RESET_COMMENT_ERRORS:
      return [];
    default:
      return state;
  }
};

export default commentErrorsReducer;
