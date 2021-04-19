import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';
import todoHistory from './todoHistory';

export default combineReducers({
  todoList: todoReducer,
  todoHistory: todoHistory,
  form: formReducer,
});
