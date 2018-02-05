import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import authorsReducer from './authors_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer,
  authors: authorsReducer,
});

export default entitiesReducer;