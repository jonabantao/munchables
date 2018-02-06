import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  DELETE_STEP,
} from '../../actions/step_actions';
import {
  RECEIVE_RECIPE
} from '../../actions/recipe_actions';
import _ from 'lodash';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_STEP:
      return _.merge({}, state, action.step);
    case RECEIVE_RECIPE:
      return _.merge({}, action.payload.steps);
    default:
      return state;
  }
};

export default stepsReducer;