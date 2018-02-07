import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import authorsReducer from './authors_reducer';
import stepsReducer from './steps_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer,
  authors: authorsReducer,
  steps: stepsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;