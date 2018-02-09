import { RECEIVE_FILTERED_RECIPES } from '../actions/recipe_actions';
import { CLEAR_SEARCH_TERM } from '../actions/search_actions';

const searchTermReducer = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_FILTERED_RECIPES:
      return action.term;
    case CLEAR_SEARCH_TERM:
      return ''; 
    default:
      return state;
  }
};

export default searchTermReducer;