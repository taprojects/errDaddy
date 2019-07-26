import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  navBarReducer,
  errorReducer
});
