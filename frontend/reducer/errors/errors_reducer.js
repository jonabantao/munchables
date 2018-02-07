import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import recipeErrorsReducer from './recipe_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  recipe: recipeErrorsReducer,
  comment: commentErrorsReducer,
});

export default errorsReducer;