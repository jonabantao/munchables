import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import usersReducer from './users_reducer';
import stepsReducer from './steps_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer,
  users: usersReducer,
  steps: stepsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;