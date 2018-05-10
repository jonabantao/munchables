import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
});

export default rootReducer;
