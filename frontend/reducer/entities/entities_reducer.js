import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';

const errorsReducer = combineReducers({
  recipes: recipesReducer,
});

export default entitiesReducer;