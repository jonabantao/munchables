import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors/errors_reducer';
import entitiesReducer from './entities/entities_reducer';
import searchTermReducer from './search_term_reducer';
import uiReducer from './ui/ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  term: searchTermReducer,
  ui: uiReducer,
});

export default rootReducer;