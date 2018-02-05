import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import authorsReducer from './authors_reducer';
import stepsReducer from './steps_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer,
  authors: authorsReducer,
  steps: stepsReducer,
});

export default entitiesReducer;